import { DrawerScreenProps } from "@react-navigation/drawer";

export type RootStackParamList = {
  Splash: undefined;
  Home: {userId: string};
  Profile: {userId: string};
  Setting: {userId: string};
};

export type HomeNavigationProp = DrawerScreenProps<RootStackParamList, "Home">



