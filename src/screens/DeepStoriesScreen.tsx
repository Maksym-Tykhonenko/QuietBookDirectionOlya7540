import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, Animated, Dimensions } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import StoryListItem from '../components/StoryListItem';
import ShareBookmark from '../components/ShareBookmark';
import { stories } from '../data/stories';
import { useSavedItems } from '../hooks/useSavedItems';
import { shareText } from '../utils/share';

const tabBg = require('../assets/images/tab-bg.png');
const { height: SH } = Dimensions.get('window');
const isSmall = SH < 700;

export default function DeepStoriesScreen() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { isStorySaved, toggleStory } = useSavedItems();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const selected = stories.find((s) => s.id === selectedId);

  useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }).start();
  }, [selectedId]);

  if (!selected) {
    return (
      <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
        <HeaderBar title="Deep Stories" />
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
            {stories.map((story) => (
              <StoryListItem key={story.id} title={story.title} onPress={() => setSelectedId(story.id)} />
            ))}
          </ScrollView>
        </Animated.View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
      <HeaderBar title="Deep Stories" onBack={() => setSelectedId(null)} />
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView contentContainerStyle={styles.detail} showsVerticalScrollIndicator={false}>
          <Text style={styles.storyTitle}>{selected.title}</Text>
          <Text style={styles.storyBody}>{selected.body}</Text>
          <Text style={styles.takeLabel}>Take from this:</Text>
          {selected.takeaways.map((t, i) => (
            <Text key={i} style={styles.takeItem}>• {t}</Text>
          ))}
          <ShareBookmark isSaved={isStorySaved(selected.id)} onShare={() => shareText(selected.body, selected.title)} onToggleSave={() => toggleStory(selected.id)} />
        </ScrollView>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  list: { paddingVertical: 12, paddingBottom: 100 },
  detail: { padding: 20, paddingBottom: 100 },
  storyTitle: { color: '#e8d5c0', fontSize: isSmall ? 20 : 22, fontWeight: '700', fontFamily: 'Georgia', marginBottom: 16 },
  storyBody: { color: '#e8d5c0', fontSize: isSmall ? 14 : 15, lineHeight: isSmall ? 22 : 24, marginBottom: 20 },
  takeLabel: { color: '#8a7060', fontSize: 13, marginBottom: 8 },
  takeItem: { color: '#e8d5c0', fontSize: isSmall ? 14 : 15, lineHeight: 22, marginBottom: 4, paddingLeft: 8 },
});