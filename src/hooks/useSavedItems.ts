import { useState, useEffect, useCallback } from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
  getSavedStories,
  saveStory,
  removeStory,
  getSavedQuotes,
  saveQuote,
  removeQuote,
} from '../utils/storage';

export function useSavedItems() {
  const [savedStoryIds, setSavedStoryIds] = useState<string[]>([]);
  const [savedQuoteIds, setSavedQuoteIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  const refresh = useCallback(async () => {
    const [stories, quotes] = await Promise.all([
      getSavedStories(),
      getSavedQuotes(),
    ]);
    setSavedStoryIds(stories);
    setSavedQuoteIds(quotes);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isFocused) {
      refresh();
    }
  }, [isFocused, refresh]);

  const toggleStory = useCallback(
    async (id: string) => {
      if (savedStoryIds.includes(id)) {
        await removeStory(id);
      } else {
        await saveStory(id);
      }
      await refresh();
    },
    [savedStoryIds, refresh]
  );

  const toggleQuote = useCallback(
    async (id: string) => {
      if (savedQuoteIds.includes(id)) {
        await removeQuote(id);
      } else {
        await saveQuote(id);
      }
      await refresh();
    },
    [savedQuoteIds, refresh]
  );

  const isStorySaved = useCallback(
    (id: string) => savedStoryIds.includes(id),
    [savedStoryIds]
  );

  const isQuoteSaved = useCallback(
    (id: string) => savedQuoteIds.includes(id),
    [savedQuoteIds]
  );

  return {
    savedStoryIds,
    savedQuoteIds,
    loading,
    toggleStory,
    toggleQuote,
    isStorySaved,
    isQuoteSaved,
    refresh,
  };
}