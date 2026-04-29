import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import ActionButton from '../components/ActionButton';
import { sparks } from '../data/sparks';

const tabBg = require('../assets/images/tab-bg.png');
const sparkBook = require('../assets/images/spark-book.png');
const { height: SH } = Dimensions.get('window');
const isSmall = SH < 700;

export default function SparkGeneratorScreen() {
  const [current, setCurrent] = useState(() => Math.floor(Math.random() * sparks.length));
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const spark = sparks[current];

  const nextSpark = () => {
    Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
      let next = Math.floor(Math.random() * sparks.length);
      while (next === current && sparks.length > 1) next = Math.floor(Math.random() * sparks.length);
      setCurrent(next);
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }).start();
    });
  };

  return (
    <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
      <HeaderBar title="Spark Generator" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={sparkBook} style={styles.bookImg} resizeMode="contain" />
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <Text style={styles.label}>Phrase:</Text>
          <Text style={styles.phrase}>{spark.phrase}</Text>
        </Animated.View>
        <Animated.View style={[styles.card, styles.cardAction, { opacity: fadeAnim }]}>
          <Text style={styles.label}>Action:</Text>
          <Text style={styles.phrase}>{spark.action}</Text>
        </Animated.View>
        <ActionButton title="Next Spark" onPress={nextSpark} variant="green" style={styles.btn} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  content: { alignItems: 'center', padding: 20, paddingBottom: 100 },
  bookImg: { width: isSmall ? 130 : 160, height: isSmall ? 95 : 120, marginBottom: 16 },
  card: { backgroundColor: 'rgba(30,15,5,0.7)', borderRadius: 12, padding: isSmall ? 16 : 20, width: '100%', marginBottom: 16, borderWidth: 1, borderColor: 'rgba(200,170,130,0.3)' },
  cardAction: { borderColor: '#c4a832' },
  label: { color: '#8a7060', fontSize: 13, marginBottom: 8 },
  phrase: { color: '#e8d5c0', fontSize: isSmall ? 16 : 18, fontFamily: 'Georgia', lineHeight: isSmall ? 24 : 28 },
  btn: { marginTop: 8 },
});