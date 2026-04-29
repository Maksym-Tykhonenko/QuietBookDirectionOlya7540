import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import StoryListItem from '../components/StoryListItem';
import QuoteCard from '../components/QuoteCard';
import ActionButton from '../components/ActionButton';
import ShareBookmark from '../components/ShareBookmark';
import { stories } from '../data/stories';
import { quotes } from '../data/quotes';
import { useSavedItems } from '../hooks/useSavedItems';
import { shareText } from '../utils/share';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const tabBg = require('../assets/images/tab-bg.png');
const scrollImg = require('../assets/images/saved-scroll.png');
const { height: SH } = Dimensions.get('window');
const isSmall = SH < 700;
const isTiny = SH < 600;

type Tab = 'stories' | 'quotes';

export default function SavedScreen() {
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();
  const [tab, setTab] = useState<Tab>('stories');
  const [viewStoryId, setViewStoryId] = useState<string | null>(null);
  const { savedStoryIds, savedQuoteIds, isStorySaved, isQuoteSaved, toggleStory, toggleQuote } = useSavedItems();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const savedStories = stories.filter((s) => savedStoryIds.includes(s.id));
  const savedQuotes = quotes.filter((q) => savedQuoteIds.includes(q.id));
  const viewStory = stories.find((s) => s.id === viewStoryId);

  useEffect(() => {
    if (!isFocused) {
      setViewStoryId(null);
      setTab('stories');
    }
  }, [isFocused]);

  useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }).start();
  }, [tab, viewStoryId]);

  if (viewStory) {
    return (
      <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
        <HeaderBar title="Saved" onBack={() => setViewStoryId(null)} />
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <ScrollView contentContainerStyle={styles.detail} showsVerticalScrollIndicator={false}>
            <Text style={styles.storyTitle}>{viewStory.title}</Text>
            <Text style={styles.storyBody}>{viewStory.body}</Text>
            <Text style={styles.takeLabel}>Take from this:</Text>
            {viewStory.takeaways.map((t, i) => (
              <Text key={i} style={styles.takeItem}>• {t}</Text>
            ))}
            <ShareBookmark
              isSaved={isStorySaved(viewStory.id)}
              onShare={() => shareText(viewStory.body, viewStory.title)}
              onToggleSave={() => toggleStory(viewStory.id)}
            />
          </ScrollView>
        </Animated.View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={tabBg} style={styles.bg} resizeMode="cover">
      <HeaderBar title="Saved" />
      <View style={styles.tabRow}>
        <TouchableOpacity style={[styles.tabBtn, tab === 'stories' && styles.tabActive]} onPress={() => setTab('stories')}>
          <Text style={[styles.tabText, tab === 'stories' && styles.tabTextActive]}>Saved Stories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabBtn, tab === 'quotes' && styles.tabActive]} onPress={() => setTab('quotes')}>
          <Text style={[styles.tabText, tab === 'quotes' && styles.tabTextActive]}>Saved Quotes</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
          {tab === 'stories' && savedStories.length === 0 && (
            <View style={styles.emptyWrap}>
              <Image source={scrollImg} style={styles.emptyImg} resizeMode="contain" />
              <Text style={styles.emptyTitle}>Your saved stories are here.{'\n'}Return to what mattered and{'\n'}continue from there.</Text>
              <ActionButton title="Open Stories" onPress={() => navigation.navigate('DeepStories')} variant="red" />
            </View>
          )}
          {tab === 'stories' && savedStories.map((story) => (
            <View key={story.id} style={styles.savedRow}>
              <View style={styles.savedRowContent}>
                <StoryListItem title={story.title} onPress={() => setViewStoryId(story.id)} />
              </View>
              <TouchableOpacity style={styles.removeBtn} onPress={() => toggleStory(story.id)}>
                <Text style={styles.removeStar}>★</Text>
              </TouchableOpacity>
            </View>
          ))}

          {tab === 'quotes' && savedQuotes.length === 0 && (
            <View style={styles.emptyWrap}>
              <Image source={scrollImg} style={styles.emptyImg} resizeMode="contain" />
              <Text style={styles.emptyTitle}>No saved quotes yet.{'\n'}Save the ones that stay with you.</Text>
              <ActionButton title="Go to Quotes" onPress={() => navigation.navigate('QuoteCards')} variant="red" />
            </View>
          )}
          {tab === 'quotes' && savedQuotes.map((q) => (
            <QuoteCard key={q.id} text={q.text} isSaved={isQuoteSaved(q.id)} onShare={() => shareText(q.text)} onToggleSave={() => toggleQuote(q.id)} />
          ))}
        </ScrollView>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  tabRow: { flexDirection: 'row', marginHorizontal: isTiny ? 12 : 16, marginTop: 8, gap: 8 },
  tabBtn: { flex: 1, paddingVertical: isTiny ? 8 : 10, borderRadius: 8, backgroundColor: 'rgba(30,15,5,0.7)', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(200,170,130,0.3)' },
  tabActive: { backgroundColor: '#c4956a' },
  tabText: { color: '#8a7060', fontSize: isTiny ? 12 : 13, fontWeight: '600' },
  tabTextActive: { color: '#2d1810' },
  listContent: { paddingVertical: 12, paddingBottom: 120 },
  savedRow: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  savedRowContent: { flex: 1 },
  removeBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  removeStar: { fontSize: 22, color: '#c4a832' },
  emptyWrap: { alignItems: 'center', paddingTop: isTiny ? 16 : isSmall ? 24 : 40, paddingHorizontal: isTiny ? 20 : 32, gap: isTiny ? 14 : 20 },
  emptyImg: { width: isTiny ? 120 : isSmall ? 160 : 200, height: isTiny ? 85 : isSmall ? 110 : 140 },
  emptyTitle: { color: '#e8d5c0', fontSize: isTiny ? 14 : isSmall ? 16 : 18, fontFamily: 'Georgia', fontStyle: 'italic', textAlign: 'center', lineHeight: isTiny ? 20 : isSmall ? 24 : 26 },
  detail: { padding: isTiny ? 16 : 20, paddingBottom: 120 },
  storyTitle: { color: '#e8d5c0', fontSize: isTiny ? 18 : isSmall ? 20 : 22, fontWeight: '700', fontFamily: 'Georgia', marginBottom: isTiny ? 12 : 16 },
  storyBody: { color: '#e8d5c0', fontSize: isTiny ? 13 : isSmall ? 14 : 15, lineHeight: isTiny ? 20 : isSmall ? 22 : 24, marginBottom: 20 },
  takeLabel: { color: '#8a7060', fontSize: isTiny ? 12 : 13, marginBottom: 8 },
  takeItem: { color: '#e8d5c0', fontSize: isTiny ? 13 : isSmall ? 14 : 15, lineHeight: isTiny ? 20 : 22, marginBottom: 4, paddingLeft: 8 },
});