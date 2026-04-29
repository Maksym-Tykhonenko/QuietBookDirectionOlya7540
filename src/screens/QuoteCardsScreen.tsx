import React, { useRef, useEffect } from 'react';
import { ImageBackground, StyleSheet, FlatList, Animated, Dimensions } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import QuoteCard from '../components/QuoteCard';
import { quotes } from '../data/quotes';
import { useSavedItems } from '../hooks/useSavedItems';
import { shareText } from '../utils/share';

const tabBg = require('../assets/images/tab-bg.png');

export default function QuoteCardsScreen() {
  const { isQuoteSaved, toggleQuote } = useSavedItems();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }, []);

  return (
    <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
      <HeaderBar title="Quote Cards" />
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <FlatList
          data={quotes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <QuoteCard text={item.text} isSaved={isQuoteSaved(item.id)} onShare={() => shareText(item.text)} onToggleSave={() => toggleQuote(item.id)} />
          )}
        />
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  list: { paddingVertical: 12, paddingBottom: 100 },
});