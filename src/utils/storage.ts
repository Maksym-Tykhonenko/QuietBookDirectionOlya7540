import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  savedStories: '@spark_saved_stories',
  savedQuotes: '@spark_saved_quotes',
  onboardingDone: '@spark_onboarding_done',
};

export async function getSavedStories(): Promise<string[]> {
  try {
    const json = await AsyncStorage.getItem(KEYS.savedStories);
    return json ? JSON.parse(json) : [];
  } catch {
    return [];
  }
}

export async function saveStory(id: string): Promise<void> {
  const list = await getSavedStories();
  if (!list.includes(id)) {
    list.push(id);
    await AsyncStorage.setItem(KEYS.savedStories, JSON.stringify(list));
  }
}

export async function removeStory(id: string): Promise<void> {
  const list = await getSavedStories();
  await AsyncStorage.setItem(
    KEYS.savedStories,
    JSON.stringify(list.filter((s) => s !== id))
  );
}

export async function getSavedQuotes(): Promise<string[]> {
  try {
    const json = await AsyncStorage.getItem(KEYS.savedQuotes);
    return json ? JSON.parse(json) : [];
  } catch {
    return [];
  }
}

export async function saveQuote(id: string): Promise<void> {
  const list = await getSavedQuotes();
  if (!list.includes(id)) {
    list.push(id);
    await AsyncStorage.setItem(KEYS.savedQuotes, JSON.stringify(list));
  }
}

export async function removeQuote(id: string): Promise<void> {
  const list = await getSavedQuotes();
  await AsyncStorage.setItem(
    KEYS.savedQuotes,
    JSON.stringify(list.filter((q) => q !== id))
  );
}

export async function isOnboardingDone(): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(KEYS.onboardingDone)) === 'true';
  } catch {
    return false;
  }
}

export async function setOnboardingDone(): Promise<void> {
  await AsyncStorage.setItem(KEYS.onboardingDone, 'true');
}