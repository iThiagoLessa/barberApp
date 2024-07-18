import React from "react";
import { Text, View } from "react-native";
import barberCardStyle from "./style";

const BarberCard = () => {
  return (
    <View style={barberCardStyle.containerWrapper}>
      <View style={barberCardStyle.circleImage}>
        <Text>imageContent</Text>
      </View>
      <View style={barberCardStyle.descriptionWrapper}>
        <Text style={barberCardStyle.nameText}>Diego Fernandes</Text>
        <View style={barberCardStyle.informationWrapper}>
          <Text>barbercard</Text>
          <Text>barbercard</Text>
        </View>
      </View>
    </View>
  );
};

export default BarberCard;
