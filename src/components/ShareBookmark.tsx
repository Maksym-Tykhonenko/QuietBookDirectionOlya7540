import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  isSaved: boolean;
  onShare: () => void;
  onToggleSave: () => void;
}

export default function ShareBookmark({ isSaved, onShare, onToggleSave }: Props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onShare} style={styles.iconBtn}>
        <Text style={styles.icon}>↗</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onToggleSave} style={styles.iconBtn}>
        <Text style={[styles.icon, isSaved && styles.iconActive]}>
          {isSaved ? '★' : '☆'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'center', gap: 32, paddingVertical: 12 },
  iconBtn: { padding: 8 },
  icon: { fontSize: 24, color: '#f0e0d0' },
  iconActive: { color: '#c4a832' },
});