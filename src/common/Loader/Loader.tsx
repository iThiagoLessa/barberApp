import React from "react";
import { ActivityIndicator, View } from "react-native";

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#383838",
      }}
    >
      <ActivityIndicator size={60} color="white" />
    </View>
  );
};

export default Loader;
