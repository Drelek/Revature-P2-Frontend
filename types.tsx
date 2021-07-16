/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */   

export type RootStackParamList = {
  Splash: undefined;
  Home: {userId: string};
  Profile: {userId: string};
  Setting: {userId: string};
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};


