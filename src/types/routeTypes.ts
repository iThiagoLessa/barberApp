import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Dashboard: undefined;
};

export type LoggedUserScreensNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Dashboard"
>;
