import { Share } from 'react-native';

export async function shareText(text: string, title?: string): Promise<void> {
  try {
    await Share.share({ message: text, title: title || 'Spark' });
  } catch (e) {
    console.log('Share error:', e);
  }
}