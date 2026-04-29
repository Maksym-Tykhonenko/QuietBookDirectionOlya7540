import React, { useState, useRef } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Animated, Dimensions } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import ActionButton from '../components/ActionButton';
import { quotes } from '../data/quotes';
import { shareText } from '../utils/share';

const tabBg = require('../assets/images/tab-bg.png');
const randBook = require('../assets/images/quote-randomizer-book.png');
const randCard = require('../assets/images/quote-randomizer-card.png');
const { height: SH } = Dimensions.get('window');
const isSmall = SH < 700;

type Phase = 'intro' | 'quote';

export default function QuoteRandomizerScreen() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const showRandom = () => {
    setIndex(Math.floor(Math.random() * quotes.length));
    setPhase('quote');
  };

  const nextQuote = () => {
    Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
      let next = Math.floor(Math.random() * quotes.length);
      while (next === index && quotes.length > 1) next = Math.floor(Math.random() * quotes.length);
      setIndex(next);
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }).start();
    });
  };

  if (phase === 'intro') {
    return (
      <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
        <HeaderBar title="Quote Randomizer" />
        <View style={styles.introContent}>
          <Image source={randCard} style={styles.cardImg} resizeMode="contain" />
          <Text style={styles.introText}>Just a random thought{'\n'}at the right time.</Text>
          <ActionButton title="Random Quote" onPress={showRandom} variant="purple" />
        </View>
      </ImageBackground>
    );
  }

  const quote = quotes[index];
  return (
    <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
      <HeaderBar title="Quote Randomizer" onBack={() => setPhase('intro')} />
      <View style={styles.quoteContent}>
        <Animated.View style={[styles.quoteCard, { opacity: fadeAnim }]}>
          <Text style={styles.quoteText}>{quote.text}</Text>
        </Animated.View>
        <ActionButton title="Next Quote" onPress={nextQuote} variant="purple" style={styles.btn} />
        <ActionButton title="Share" onPress={() => shareText(quote.text)} variant="orange" style={styles.btn} />
        <Image source={randBook} style={styles.bottomBook} resizeMode="contain" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  introContent: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, gap: isSmall ? 18 : 24 },
  cardImg: { width: isSmall ? 150 : 180, height: isSmall ? 110 : 140 },
  introText: { color: '#e8d5c0', fontSize: isSmall ? 24 : 28, fontFamily: 'Georgia', fontWeight: '700', fontStyle: 'italic', textAlign: 'center', lineHeight: isSmall ? 32 : 36 },
  quoteContent: { flex: 1, alignItems: 'center', padding: 20, paddingTop: isSmall ? 16 : 24 },
  quoteCard: { backgroundColor: 'rgba(30,15,5,0.7)', borderRadius: 12, padding: isSmall ? 18 : 24, borderWidth: 1, borderColor: 'rgba(200,170,130,0.3)', width: '100%' },
  quoteText: { color: '#e8d5c0', fontSize: isSmall ? 14 : 15, lineHeight: isSmall ? 22 : 24, textAlign: 'center', fontFamily: 'Georgia' },
  btn: { marginTop: 14, minWidth: 200 },
  bottomBook: { width: isSmall ? 140 : 180, height: isSmall ? 100 : 130, marginTop: isSmall ? 16 : 24 },
});