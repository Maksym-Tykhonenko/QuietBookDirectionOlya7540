import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native';

const { height: SH } = Dimensions.get('window');
const isSmall = SH < 700;

const BG: Record<string, string> = {
  orange: '#c4713a',
  red: '#8b1a1a',
  purple: '#6b3fa0',
  green: '#4a7c3f',
};

interface Props {
  title: string;
  onPress: () => void;
  variant?: 'orange' | 'red' | 'purple' | 'green';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function ActionButton({ title, onPress, variant = 'orange', style, textStyle }: Props) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: BG[variant] }, style]} onPress={onPress} activeOpacity={0.7}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: isSmall ? 12 : 14,
    paddingHorizontal: isSmall ? 28 : 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: isSmall ? 140 : 160,
  },
  text: {
    color: '#f0e0d0',
    fontSize: isSmall ? 16 : 18,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
});