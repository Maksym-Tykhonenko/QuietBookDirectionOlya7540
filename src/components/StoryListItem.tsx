import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { height: SH } = Dimensions.get('window');
const isSmall = SH < 700;

interface StoryListItemProps {
  title: string;
  onPress: () => void;
}

export default function StoryListItem({ title, onPress }: StoryListItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#d4a574',
    paddingVertical: isSmall ? 14 : 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(200,170,130,0.3)',
  },
  title: {
    color: '#2d1810',
    fontSize: isSmall ? 14 : 15,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  arrow: {
    color: '#2d1810',
    fontSize: 24,
    fontWeight: '300',
  },
});