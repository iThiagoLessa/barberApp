import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  barberList: undefined;
  appointments: undefined;
};

export type LoggedUserScreensNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "barberList",
  "appointments"
>;
