import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Platform, StatusBar, Text, View } from "react-native";
import dashboardStyle from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#383838",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={dashboardStyle.mainContainerWrapper}>
        <View style={dashboardStyle.headerWrapper}>
          <Text>Bem vindo, Thiago Lessa</Text>
          <FontAwesome5 name="user-circle" size={30} color="#900" />
        </View>
        <View>
          <Text>Dashboard</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
