import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { height: SH, width: SW } = Dimensions.get('window');
const isSmall = SH < 700;
const isTiny = SH < 600;

interface Props {
  title: string;
  onBack?: () => void;
}

export default function HeaderBar({ title, onBack }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <LinearGradient colors={['#8b1a1a', '#6b0f0f']} style={styles.gradient}>
          <View style={styles.row}>
            {onBack ? (
              <TouchableOpacity onPress={onBack} style={styles.sideBtn} activeOpacity={0.8}>
                <Text style={styles.backIcon}>‹</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.sideBtn} />
            )}

            <View style={styles.titleWrap}>
              <Text style={styles.title} numberOfLines={2}>
                {title}
              </Text>
            </View>

            <View style={styles.sideBtn} />
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'transparent',
  },
  wrapper: {
    paddingHorizontal: isTiny ? 8 : isSmall ? 10 : 12,
    paddingTop: Platform.OS === 'android' ? 12 : isTiny ? 2 : 6,
    paddingBottom: isTiny ? 2 : 4,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  gradient: {
    borderRadius: isTiny ? 10 : isSmall ? 12 : 14,
    overflow: 'hidden',
    minHeight: isTiny ? 48 : isSmall ? 56 : 68,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: isTiny ? 10 : isSmall ? 12 : 16,
    paddingVertical: isTiny ? 8 : isSmall ? 10 : 14,
  },
  sideBtn: {
    width: isTiny ? 28 : isSmall ? 32 : 36,
    height: isTiny ? 28 : isSmall ? 32 : 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    color: '#f0e0d0',
    fontSize: isTiny ? 26 : isSmall ? 28 : 32,
    fontWeight: '300',
    marginTop: -4,
  },
  titleWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: isTiny ? 4 : 8,
  },
  title: {
    color: '#f0e0d0',
    fontSize: isTiny ? 16 : isSmall ? 18 : 22,
    lineHeight: isTiny ? 20 : isSmall ? 22 : 28,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontWeight: '700',
  },
});