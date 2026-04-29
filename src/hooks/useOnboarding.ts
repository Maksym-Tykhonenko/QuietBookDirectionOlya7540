import { useState, useEffect } from 'react';
import { isOnboardingDone, setOnboardingDone } from '../utils/storage';

export function useOnboarding() {
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    isOnboardingDone().then((val) => {
      setDone(val);
      setLoading(false);
    });
  }, []);

  const completeOnboarding = async () => {
    await setOnboardingDone();
    setDone(true);
  };

  return { loading, done, completeOnboarding };
}