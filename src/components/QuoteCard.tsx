import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ShareBookmark from './ShareBookmark';

const { height: SH } = Dimensions.get('window');
const isSmall = SH < 700;

interface Props {
  text: string;
  isSaved: boolean;
  onShare: () => void;
  onToggleSave: () => void;
}

export default function QuoteCard({ text, isSaved, onShare, onToggleSave }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{text}</Text>
      <ShareBookmark isSaved={isSaved} onShare={onShare} onToggleSave={onToggleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(30,15,5,0.7)',
    borderRadius: 12,
    padding: isSmall ? 16 : 20,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(200,170,130,0.3)',
  },
  text: {
    color: '#e8d5c0',
    fontSize: isSmall ? 14 : 15,
    lineHeight: isSmall ? 22 : 24,
    fontFamily: 'Georgia',
    textAlign: 'center',
    marginBottom: 8,
  },
});