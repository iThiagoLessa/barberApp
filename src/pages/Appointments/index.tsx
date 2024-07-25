import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MainStructure from "../../common/MainStructure/MainStructure";
import { LoggedUserScreensNavigationProp } from "../../types/routeTypes";
import SelectedBarber from "./components/SelectedBarber/SelectedBarber";
import appointmentStyle from "./style";
import DateTimePicker from "@react-native-community/datetimepicker";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const data = [
  {
    name: "Diego Fernandes",
  },
  {
    name: "Thiago Lessa",
  },
  {
    name: "Josh",
  },
  {
    name: "Mayk Brito",
  },
];

const Appointments = () => {
  const navigation = useNavigation<LoggedUserScreensNavigationProp>();
  const ref = React.useRef<ScrollView | null>(null);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <MainStructure>
      <View style={appointmentStyle.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" color="white" size={30} />
        </TouchableOpacity>
        <Text style={appointmentStyle.headerText}>Agendamento</Text>
        <FontAwesome5 name="user-circle" size={40} color="white" />
      </View>

      <View style={{ padding: 20 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          ref={ref}
          onScroll={(event) => {
            const index = Math.floor(
              event.nativeEvent.contentOffset.x / ITEM_WIDTH
            );
            setSelectedItem(index);
          }}
        >
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                ref.current?.scrollTo({
                  x: index * ITEM_WIDTH,
                  animated: true,
                });
                setSelectedItem(index);
              }}
            >
              <SelectedBarber
                isSelected={index === selectedItem}
                barberName={item.name}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Escolha a data
        </Text>

        {/* <DateTimePicker
          mode="date"
          display="spinner"
          onChange={() => null}
          // textColor="white"
          value={new Date()}
        /> */}
      </View>
    </MainStructure>
  );
};

export default Appointments;
