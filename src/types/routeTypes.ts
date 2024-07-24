import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  BarberList: undefined;
};

export type LoggedUserScreensNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "BarberList"
>;
