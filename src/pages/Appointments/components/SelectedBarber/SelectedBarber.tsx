import React from "react";
import { Image, Text, View } from "react-native";
import selectedBarberStyle from "./style";

interface Props {
  isSelected: boolean;
  barberName: string;
}

const SelectedBarber: React.FC<Props> = ({ isSelected, barberName }) => {
  return (
    <View style={selectedBarberStyle(isSelected).containerWrapper}>
      <View style={selectedBarberStyle().imageWrapper}>
        <Image
          style={{ width: "100%", height: "100%", flex: 1 }}
          source={require("../../../../assets/barberExample.jpg")}
        />
      </View>
      <Text style={selectedBarberStyle(isSelected).nameText}>{barberName}</Text>
    </View>
  );
};

export default SelectedBarber;
