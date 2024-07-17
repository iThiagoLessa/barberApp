import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

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
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
