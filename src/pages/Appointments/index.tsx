import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import appointmentStyle from "./style";
import { useNavigation } from "@react-navigation/native";
import { LoggedUserScreensNavigationProp } from "../../types/routeTypes";

const Appointments = () => {
  const navigation = useNavigation<LoggedUserScreensNavigationProp>();

  return (
    <View style={appointmentStyle.mainContainerWrapper}>
      <StatusBar backgroundColor="#191919" barStyle="light-content" />
      {Platform.OS === "ios" && (
        <View style={appointmentStyle.statusBarBackground} />
      )}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "transparent",
        }}
      >
        <View style={appointmentStyle.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" color="white" size={30} />
          </TouchableOpacity>
          <Text style={appointmentStyle.headerText}>Agendamento</Text>
          <FontAwesome5 name="user-circle" size={40} color="white" />
        </View>

        <View>
          <Text>Appointmentsrs</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Appointments;
