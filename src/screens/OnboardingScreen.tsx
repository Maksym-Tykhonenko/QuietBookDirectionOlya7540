import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const isSmallScreen = SCREEN_HEIGHT < 700;

const Colors = {
  bgDark: '#1a0a00',
  buttonOrange: '#c4713a',
  textMuted: '#a08870',
  textLight: '#f0e0d0',
  textParchment: '#e8d5c0',
  dotInactive: '#5a4030',
};

const slides = [
  {
    image: require('../assets/images/onboard-1.png'),
    title: 'Start with a single step',
    subtitle: 'No noise. Just one clear direction at a time.',
    button: 'Continue',
  },
  {
    image: require('../assets/images/onboard-2.png'),
    title: 'A quick shift in a second',
    subtitle: 'Sometimes one line is enough to reset your direction.',
    button: 'Next',
  },
  {
    image: require('../assets/images/onboard-3.png'),
    title: 'Think less. Move faster.',
    subtitle: 'Small actions change more than perfect plans.',
    button: 'Next',
  },
  {
    image: require('../assets/images/onboard-4.png'),
    title: 'Shift your perspective',
    subtitle: 'Sometimes the answer is already in your hands.',
    button: 'Next',
  },
  {
    image: require('../assets/images/onboard-5.png'),
    title: 'Go deeper when needed',
    subtitle: 'Stories that give context, not empty motivation.',
    button: 'Next',
  },
  {
    image: require('../assets/images/onboard-6.png'),
    title: 'Take your first spark',
    subtitle: 'Start now. Adjust later.',
    button: 'Get Started',
  },
];

interface Props {
  onComplete: () => void;
}

export default function OnboardingScreen({ onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fadeImage = useRef(new Animated.Value(0)).current;
  const fadeTitle = useRef(new Animated.Value(0)).current;
  const fadeSubtitle = useRef(new Animated.Value(0)).current;
  const fadeButton = useRef(new Animated.Value(0)).current;
  const slideImage = useRef(new Animated.Value(30)).current;
  const slideTitle = useRef(new Animated.Value(20)).current;
  const slideSubtitle = useRef(new Animated.Value(20)).current;
  const slideButton = useRef(new Animated.Value(15)).current;

  const animateIn = () => {
    fadeImage.setValue(0);
    fadeTitle.setValue(0);
    fadeSubtitle.setValue(0);
    fadeButton.setValue(0);
    slideImage.setValue(30);
    slideTitle.setValue(20);
    slideSubtitle.setValue(20);
    slideButton.setValue(15);

    Animated.stagger(120, [
      Animated.parallel([
        Animated.timing(fadeImage, { toValue: 1, duration: 400, useNativeDriver: true }),
        Animated.timing(slideImage, { toValue: 0, duration: 400, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(fadeTitle, { toValue: 1, duration: 350, useNativeDriver: true }),
        Animated.timing(slideTitle, { toValue: 0, duration: 350, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(fadeSubtitle, { toValue: 1, duration: 350, useNativeDriver: true }),
        Animated.timing(slideSubtitle, { toValue: 0, duration: 350, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(fadeButton, { toValue: 1, duration: 300, useNativeDriver: true }),
        Animated.timing(slideButton, { toValue: 0, duration: 300, useNativeDriver: true }),
      ]),
    ]).start();
  };

  useEffect(() => {
    animateIn();
  }, [currentIndex]);

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  const slide = slides[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={{ opacity: fadeImage, transform: [{ translateY: slideImage }] }}>
          <Image
            source={slide.image}
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>

        <Animated.View style={{ opacity: fadeTitle, transform: [{ translateY: slideTitle }] }}>
          <Text style={styles.title}>{slide.title}</Text>
        </Animated.View>

        <Animated.View style={{ opacity: fadeSubtitle, transform: [{ translateY: slideSubtitle }] }}>
          <Text style={styles.subtitle}>{slide.subtitle}</Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.controls,
            { opacity: fadeButton, transform: [{ translateY: slideButton }] },
          ]}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={goNext}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>{slide.button}</Text>
          </TouchableOpacity>

          <View style={styles.dots}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  i === currentIndex ? styles.dotActive : styles.dotInactive,
                ]}
              />
            ))}
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgDark,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: isSmallScreen ? 28 : 40,
  },
  image: {
    width: isSmallScreen ? 150 : 200,
    height: isSmallScreen ? 150 : 200,
    marginBottom: isSmallScreen ? 20 : 32,
  },
  title: {
    color: Colors.textParchment,
    fontSize: isSmallScreen ? 20 : 24,
    fontWeight: '700',
    fontFamily: 'Georgia',
    textAlign: 'center',
    marginBottom: isSmallScreen ? 8 : 12,
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: isSmallScreen ? 13 : 15,
    textAlign: 'center',
    lineHeight: isSmallScreen ? 19 : 22,
    paddingHorizontal: 12,
  },
  controls: {
    alignItems: 'center',
    marginTop: isSmallScreen ? 24 : 36,
    gap: isSmallScreen ? 14 : 18,
  },
  button: {
    backgroundColor: Colors.buttonOrange,
    paddingVertical: isSmallScreen ? 13 : 16,
    paddingHorizontal: isSmallScreen ? 40 : 52,
    borderRadius: 14,
    minWidth: isSmallScreen ? 160 : 200,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.textLight,
    fontSize: isSmallScreen ? 16 : 18,
    fontWeight: '600',
    fontFamily: 'Georgia',
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
    backgroundColor: Colors.dotInactive,
  },
});