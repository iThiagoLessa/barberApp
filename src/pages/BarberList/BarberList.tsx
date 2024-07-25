import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MainStructure from "../../common/MainStructure/MainStructure";
import BarberCard from "./components/BarberCard";
import baberListStyle from "./style";

const BarberList = () => {
  return (
    <MainStructure>
      <View style={baberListStyle.headerWrapper}>
        <View style={baberListStyle.textWrapper}>
          <Text style={baberListStyle.welcomeWrapperText}>Bem vindo,</Text>
          <Text style={baberListStyle.nameWrapperText}>Thiago Lessa</Text>
        </View>
        <FontAwesome5 name="user-circle" size={40} color="white" />
      </View>
      <View style={baberListStyle.contentWrapper}>
        <Text style={baberListStyle.barberText}>Barbeiros</Text>

        <FlatList
          data={[
            {
              name: "Diego Fernandes",
              startEndHour: ["08:00", "18:00"],
              workingDays: ["Segunda", "Quarta"],
            },
            {
              name: "Thiago Lessa",
              startEndHour: ["08:00", "18:00"],
              workingDays: ["Segunda", "Sexta"],
            },
            {
              name: "Josh",
              startEndHour: ["08:00", "18:00"],
              workingDays: ["Segunda", "Terça"],
            },
            {
              name: "Mayk Brito",
              startEndHour: ["08:00", "18:00"],
              workingDays: ["Segunda", "Sexta"],
            },
          ]}
          renderItem={({ item }) => (
            <BarberCard
              barberName={item.name}
              startEndHour={item.startEndHour}
              workingDays={item.workingDays}
            />
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </MainStructure>
  );
};

export default BarberList;
