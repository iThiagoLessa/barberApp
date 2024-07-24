import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Appointments from "../pages/Appointments";
import BarberList from "../pages/BarberList/BarberList";
import Login from "../pages/Login/Login";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="barberList"
        component={BarberList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="appointments"
        component={Appointments}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
