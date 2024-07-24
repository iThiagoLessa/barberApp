import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import barberCardStyle from "./style";
import Feather from "react-native-vector-icons/Feather";

interface Props {
  barberName: string;
  startEndHour: string[];
  workingDays: string[];
}

const BarberCard: React.FC<Props> = ({
  barberName,
  startEndHour,
  workingDays,
}) => {
  return (
    <TouchableOpacity
      style={barberCardStyle.containerWrapper}
      onPress={() => console.log("clicou")}
    >
      <View style={[barberCardStyle.circleImage, { overflow: "hidden" }]}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderRadius: 9999,
          }}
          source={require("../../../../assets/barberExample.jpg")}
        />
      </View>
      <View style={barberCardStyle.descriptionWrapper}>
        <Text style={barberCardStyle.nameText}>{barberName}</Text>
        <View style={barberCardStyle.informationWrapper}>
          <View style={barberCardStyle.wrapper}>
            <Feather name="calendar" size={15} color="#ffffff" />
            <Text
              style={{ color: "white" }}
            >{`${workingDays[0]} à ${workingDays[1]} `}</Text>
          </View>
          <View style={barberCardStyle.wrapper}>
            <Feather name="clock" size={15} color="#ffffff" />
            <Text style={{ color: "white" }}>
              {`${startEndHour[0]} às ${startEndHour[1]}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BarberCard;
