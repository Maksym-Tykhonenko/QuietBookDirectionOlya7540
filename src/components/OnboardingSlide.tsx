import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';
import ActionButton from './ActionButton';
import { Colors } from '../utils/colors';
import { Fonts } from '../utils/fonts';

const { width } = Dimensions.get('window');

interface Props {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  buttonText: string;
  onPress: () => void;
  currentIndex: number;
  totalSlides: number;
}

export default function OnboardingSlide({
  image,
  title,
  subtitle,
  buttonText,
  onPress,
  currentIndex,
  totalSlides,
}: Props) {
  return (
    <View style={styles.slide}>
      <View style={styles.closeRow}>
        <View style={styles.closeBtn}>
          <Text style={styles.closeX}>✕</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.bottom}>
        <ActionButton title={buttonText} onPress={onPress} variant="orange" />
        <View style={styles.dots}>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === currentIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width,
    flex: 1,
    backgroundColor: Colors.bgParchment,
  },
  closeRow: {
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.bgParchmentDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeX: {
    color: Colors.textDark,
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  title: {
    color: Colors.textDark,
    fontSize: Fonts.sizes.xl,
    fontWeight: '700',
    fontFamily: Fonts.heading,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: Fonts.sizes.sm,
    textAlign: 'center',
    lineHeight: 20,
  },
  bottom: {
    alignItems: 'center',
    paddingBottom: 40,
    gap: 16,
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    backgroundColor: Colors.buttonOrange,
  },
  dotInactive: {
    backgroundColor: Colors.bgParchmentDark,
  },
});