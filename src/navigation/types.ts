export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Main: undefined;
};

export type MainTabParamList = {
  SparkGenerator: undefined;
  InnerDirectionCheck: undefined;
  DeepStories: undefined;
  QuoteRandomizer: undefined;
  QuoteCards: undefined;
  Saved: undefined;
};

export type DeepStoriesStackParamList = {
  StoriesList: undefined;
  StoryDetail: { storyId: string };
};