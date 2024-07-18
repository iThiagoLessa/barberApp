import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import BarberCard from "./components/BarberCard";
import dashboardStyle from "./style";

const Dashboard = () => {
  return (
    <View style={dashboardStyle.mainContainerWrapper}>
      <StatusBar backgroundColor="#191919" barStyle="light-content" />
      {Platform.OS === "ios" && (
        <View style={dashboardStyle.statusBarBackground} />
      )}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "transparent",
        }}
      >
        <View style={dashboardStyle.headerWrapper}>
          <View style={dashboardStyle.textWrapper}>
            <Text style={dashboardStyle.welcomeWrapperText}>Bem vindo,</Text>
            <Text style={dashboardStyle.nameWrapperText}>Thiago Lessa</Text>
          </View>
          <FontAwesome5 name="user-circle" size={40} color="white" />
        </View>
        <View style={dashboardStyle.contentWrapper}>
          <Text style={dashboardStyle.barberText}>Barbeiros</Text>

          <BarberCard />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
