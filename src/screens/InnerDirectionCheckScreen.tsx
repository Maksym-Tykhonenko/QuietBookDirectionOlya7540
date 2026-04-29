import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderBar from '../components/HeaderBar';
import ActionButton from '../components/ActionButton';
import { levels, getResult } from '../data/directionCheck';

const tabBg = require('../assets/images/tab-bg.png');
const sparkBook = require('../assets/images/spark-book.png');
const { height: SH } = Dimensions.get('window');
const isSmall = SH < 700;
const isTiny = SH < 600;

const STORAGE_KEY_COMPLETED = '@quiz_completed_levels';
const STORAGE_KEY_CURRENT = '@quiz_current_level';

type Phase = 'intro' | 'task' | 'result';

export default function InnerDirectionCheckScreen() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentLevel, setCurrentLevel] = useState(0);
  const [taskIndex, setTaskIndex] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [locked, setLocked] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedCompleted = await AsyncStorage.getItem(STORAGE_KEY_COMPLETED);
        const savedCurrent = await AsyncStorage.getItem(STORAGE_KEY_CURRENT);
        if (savedCompleted) setCompletedLevels(JSON.parse(savedCompleted));
        if (savedCurrent) setCurrentLevel(parseInt(savedCurrent, 10));
      } catch {}
      setLoaded(true);
    };
    loadProgress();
  }, []);

  const saveProgress = async (completed: number[], current: number) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completed));
      await AsyncStorage.setItem(STORAGE_KEY_CURRENT, current.toString());
    } catch {}
  };

  const level = levels[currentLevel];
  const totalTasks = level ? level.tasks.length : 0;
  const correctCount = scores.filter((s) => s === 3).length;
  const percentage = totalTasks > 0 ? Math.round((correctCount / totalTasks) * 100) : 0;
  const passed = percentage >= 70;

  useEffect(() => {
    if (phase === 'task') {
      Animated.timing(progressAnim, {
        toValue: (taskIndex + 1) / totalTasks,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [taskIndex, phase]);

  const startCheck = () => {
    setPhase('task');
    setTaskIndex(0);
    setScores([]);
    setSelectedId(null);
    setIsCorrect(null);
    setLocked(false);
    progressAnim.setValue(0);
  };

  const selectOption = (optionId: string, score: number) => {
    if (locked) return;
    setLocked(true);
    setSelectedId(optionId);
    setIsCorrect(score === 3);

    setTimeout(() => {
      const newScores = [...scores, score];
      setScores(newScores);

      if (taskIndex < totalTasks - 1) {
        fadeAnim.setValue(0);
        setTaskIndex(taskIndex + 1);
        setSelectedId(null);
        setIsCorrect(null);
        setLocked(false);
        Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }).start();
      } else {
        setPhase('result');
      }
    }, 800);
  };

  const retry = () => {
    setPhase('intro');
    setTaskIndex(0);
    setScores([]);
    setSelectedId(null);
    setIsCorrect(null);
    setLocked(false);
  };

  const nextLevel = () => {
    let newCompleted = completedLevels;
    if (!completedLevels.includes(currentLevel)) {
      newCompleted = [...completedLevels, currentLevel];
      setCompletedLevels(newCompleted);
    }
    const next = currentLevel < levels.length - 1 ? currentLevel + 1 : currentLevel;
    setCurrentLevel(next);
    saveProgress(newCompleted, next);
    retry();
  };

  const selectLevel = (i: number) => {
    setCurrentLevel(i);
    saveProgress(completedLevels, i);
  };

  const getOptionStyle = (optionId: string, score: number) => {
    if (selectedId === null) return styles.optionBtn;
    if (selectedId === optionId) {
      return [styles.optionBtn, score === 3 ? styles.optionCorrect : styles.optionWrong];
    }
    if (selectedId !== null && score === 3) {
      return [styles.optionBtn, styles.optionCorrectHint];
    }
    return [styles.optionBtn, styles.optionDimmed];
  };

  const getOptionTextStyle = (optionId: string, score: number) => {
    if (selectedId === null) return styles.optionText;
    if (selectedId === optionId) {
      return [styles.optionText, { color: '#ffffff' }];
    }
    if (selectedId !== null && score === 3) {
      return [styles.optionText, { color: '#a0d8a0' }];
    }
    return [styles.optionText, { opacity: 0.5 }];
  };

  if (!loaded) {
    return (
      <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
        <HeaderBar title="Inner Direction Check" />
        <View style={styles.loadingWrap}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </ImageBackground>
    );
  }

  if (phase === 'intro') {
    return (
      <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
        <HeaderBar title="Inner Direction Check" />
        <ScrollView contentContainerStyle={styles.introScroll} showsVerticalScrollIndicator={false}>
          <Image source={sparkBook} style={styles.introImg} resizeMode="contain" />
          <Text style={styles.levelLabel}>Level {level.level}</Text>
          <Text style={styles.introTitle}>Check your direction</Text>
          <Text style={styles.introSub}>{totalTasks} questions · 70% to pass</Text>

          {completedLevels.includes(currentLevel) && (
            <View style={styles.completedBadge}>
              <Text style={styles.completedText}>✓ Completed</Text>
            </View>
          )}

          <ActionButton title="Begin Check" onPress={startCheck} variant="red" />

          {levels.length > 1 && (
            <View style={styles.levelSelector}>
              <Text style={styles.levelSelectorTitle}>All Levels</Text>
              <View style={styles.levelGrid}>
                {levels.map((lvl, i) => {
                  const isCompleted = completedLevels.includes(i);
                  const isCurrent = i === currentLevel;
                  const isLocked = i > 0 && !completedLevels.includes(i - 1) && !isCurrent;
                  return (
                    <TouchableOpacity
                      key={i}
                      style={[
                        styles.levelDot,
                        isCurrent && styles.levelDotCurrent,
                        isCompleted && styles.levelDotCompleted,
                        isLocked && styles.levelDotLocked,
                      ]}
                      onPress={() => { if (!isLocked) selectLevel(i); }}
                      disabled={isLocked}
                      activeOpacity={0.7}
                    >
                      <Text style={[
                        styles.levelDotText,
                        isCompleted && styles.levelDotTextCompleted,
                        isLocked && styles.levelDotTextLocked,
                      ]}>
                        {isCompleted ? '✓' : lvl.level}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    );
  }

  if (phase === 'task') {
    const task = level.tasks[taskIndex];
    return (
      <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
        <HeaderBar title={`Level ${level.level}`} onBack={retry} />

        <View style={styles.progressBarWrap}>
          <Animated.View style={[styles.progressBarFill, {
            width: progressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          }]} />
        </View>

        <View style={styles.counterRow}>
          <Text style={styles.counterText}>{taskIndex + 1} / {totalTasks}</Text>
          <Text style={styles.counterScore}>{scores.filter(s => s === 3).length} correct</Text>
        </View>

        <ScrollView contentContainerStyle={styles.taskContent} showsVerticalScrollIndicator={false}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={styles.taskQ}>{task.question}</Text>
            {task.options.map((opt) => (
              <TouchableOpacity
                key={opt.id}
                style={getOptionStyle(opt.id, opt.score)}
                onPress={() => selectOption(opt.id, opt.score)}
                activeOpacity={0.7}
                disabled={locked}
              >
                <Text style={getOptionTextStyle(opt.id, opt.score)}>{opt.text}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </ScrollView>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
      <HeaderBar title="Result" />
      <ScrollView contentContainerStyle={styles.resultScroll} showsVerticalScrollIndicator={false}>
        <Image source={sparkBook} style={styles.resultImg} resizeMode="contain" />

        <View style={styles.scoreCircle}>
          <Text style={styles.scorePercent}>{percentage}%</Text>
          <Text style={styles.scoreLabel}>{correctCount}/{totalTasks} correct</Text>
        </View>

        <Text style={[styles.resultTitle, passed ? styles.resultPass : styles.resultFail]}>
          {passed ? "Level Passed!" : "Not Quite..."}
        </Text>
        <Text style={styles.resultSub}>
          {passed
            ? 'Your choices move things forward. Not perfect — but effective.'
            : 'You need 70% correct answers to pass. Review and try again.'
          }
        </Text>

        <View style={styles.resultButtons}>
          {passed && currentLevel < levels.length - 1 && (
            <ActionButton title="Next Level →" onPress={nextLevel} variant="green" style={styles.resultBtn} />
          )}
          <ActionButton title={passed ? "Retry Level" : "Try Again"} onPress={retry} variant={passed ? "orange" : "red"} style={styles.resultBtn} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  loadingWrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  loadingText: { color: '#8a7060', fontSize: 16 },

  introScroll: { alignItems: 'center', padding: isTiny ? 20 : 32, paddingBottom: 120, gap: isTiny ? 8 : isSmall ? 12 : 16 },
  introImg: { width: isTiny ? 100 : isSmall ? 130 : 160, height: isTiny ? 75 : isSmall ? 95 : 120 },
  levelLabel: { color: '#c4713a', fontSize: isTiny ? 16 : isSmall ? 18 : 20, fontWeight: '700' },
  introTitle: { color: '#e8d5c0', fontSize: isTiny ? 18 : isSmall ? 22 : 26, fontFamily: 'Georgia', textAlign: 'center', fontWeight: '700' },
  introSub: { color: '#8a7060', fontSize: isTiny ? 12 : 14, textAlign: 'center' },
  completedBadge: { backgroundColor: 'rgba(74,124,63,0.3)', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: '#4a7c3f' },
  completedText: { color: '#7abf6a', fontSize: 14, fontWeight: '600' },

  levelSelector: { width: '100%', marginTop: isTiny ? 8 : 16 },
  levelSelectorTitle: { color: '#8a7060', fontSize: 13, textAlign: 'center', marginBottom: 12 },
  levelGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: isTiny ? 8 : 10 },
  levelDot: { width: isTiny ? 34 : 40, height: isTiny ? 34 : 40, borderRadius: isTiny ? 17 : 20, backgroundColor: 'rgba(30,15,5,0.7)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(200,170,130,0.3)' },
  levelDotCurrent: { borderColor: '#c4713a', borderWidth: 2 },
  levelDotCompleted: { backgroundColor: 'rgba(74,124,63,0.4)', borderColor: '#4a7c3f' },
  levelDotLocked: { opacity: 0.4 },
  levelDotText: { color: '#e8d5c0', fontSize: isTiny ? 12 : 14, fontWeight: '700' },
  levelDotTextCompleted: { color: '#7abf6a' },
  levelDotTextLocked: { color: '#5a4030' },

  progressBarWrap: { height: 4, backgroundColor: 'rgba(200,170,130,0.2)', marginHorizontal: 20, marginTop: 8, borderRadius: 2, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#c4713a', borderRadius: 2 },

  counterRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, marginTop: 8, marginBottom: 4 },
  counterText: { color: '#8a7060', fontSize: 13 },
  counterScore: { color: '#7abf6a', fontSize: 13 },

  taskContent: { padding: 20, paddingBottom: 120 },
  taskQ: { color: '#e8d5c0', fontSize: isTiny ? 16 : isSmall ? 18 : 20, fontFamily: 'Georgia', textAlign: 'center', marginBottom: isTiny ? 16 : 24, lineHeight: isTiny ? 22 : isSmall ? 26 : 30 },
  optionBtn: { backgroundColor: 'rgba(30,15,5,0.7)', borderRadius: 12, padding: isTiny ? 12 : isSmall ? 16 : 18, marginBottom: isTiny ? 8 : 12, borderWidth: 1.5, borderColor: 'rgba(200,170,130,0.3)' },
  optionCorrect: { backgroundColor: 'rgba(74,124,63,0.5)', borderColor: '#4a7c3f' },
  optionWrong: { backgroundColor: 'rgba(180,50,50,0.5)', borderColor: '#b43232' },
  optionCorrectHint: { borderColor: 'rgba(74,124,63,0.5)' },
  optionDimmed: { opacity: 0.4 },
  optionText: { color: '#e8d5c0', fontSize: isTiny ? 13 : isSmall ? 15 : 16, textAlign: 'center', lineHeight: isTiny ? 18 : 22 },

  resultScroll: { alignItems: 'center', padding: isTiny ? 20 : 32, paddingBottom: 120, gap: isTiny ? 8 : 12 },
  resultImg: { width: isTiny ? 90 : isSmall ? 110 : 140, height: isTiny ? 65 : isSmall ? 80 : 100 },
  scoreCircle: { width: isTiny ? 90 : isSmall ? 100 : 120, height: isTiny ? 90 : isSmall ? 100 : 120, borderRadius: isTiny ? 45 : isSmall ? 50 : 60, borderWidth: 3, borderColor: '#c4713a', alignItems: 'center', justifyContent: 'center', marginVertical: isTiny ? 4 : 8 },
  scorePercent: { color: '#e8d5c0', fontSize: isTiny ? 24 : isSmall ? 28 : 32, fontWeight: '700', fontFamily: 'Georgia' },
  scoreLabel: { color: '#8a7060', fontSize: isTiny ? 10 : 12, marginTop: 2 },
  resultTitle: { fontSize: isTiny ? 20 : isSmall ? 24 : 28, fontWeight: '700', fontFamily: 'Georgia', textAlign: 'center' },
  resultPass: { color: '#7abf6a' },
  resultFail: { color: '#d45a5a' },
  resultSub: { color: '#8a7060', fontSize: isTiny ? 12 : isSmall ? 14 : 15, textAlign: 'center', lineHeight: isTiny ? 18 : 22, paddingHorizontal: 16 },
  resultButtons: { alignItems: 'center', gap: 8, marginTop: isTiny ? 8 : 12, width: '100%' },
  resultBtn: { marginTop: 4, minWidth: isTiny ? 180 : 220 },
});