import React from "react";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";
import mainStructureStyle from "./style";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainStructure: React.FC<Props> = ({ children }) => {
  return (
    <View style={mainStructureStyle.mainContainerWrapper}>
      <StatusBar backgroundColor="#191919" barStyle="light-content" />
      {Platform.OS === "ios" && (
        <View style={mainStructureStyle.statusBarBackground} />
      )}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "transparent",
        }}
      >
        {children}
      </SafeAreaView>
    </View>
  );
};

export default MainStructure;
