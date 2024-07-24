import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BarberList from "../pages/BarberList/BarberList";

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BarberList" component={BarberList} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
