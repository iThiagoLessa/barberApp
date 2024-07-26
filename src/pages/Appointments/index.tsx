import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment, { Moment } from "moment";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";
import MainStructure from "../../common/MainStructure/MainStructure";
import { LoggedUserScreensNavigationProp } from "../../types/routeTypes";
import SelectedBarber from "./components/SelectedBarber/SelectedBarber";
import appointmentStyle from "./style";

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
  const [selectedDate, setSelectedDate] = useState<string | any>(null);

  // Lista de datas desabilitadas (ps: vou remover depois que for integrar com o serviço)
  const disabledDates = ["2024-07-16", "2024-07-19", "2024-07-23"];

  // Função para marcar datas desabilitadas
  const getDisabledDates = (): Record<
    string,
    {
      disabled: boolean;
      disableTouchEvent: boolean;
      customStyles: {
        container: { backgroundColor: string };
        text: { color: string };
      };
    }
  > => {
    const dates: Record<
      string,
      {
        disabled: boolean;
        disableTouchEvent: boolean;
        customStyles: {
          container: { backgroundColor: string };
          text: { color: string };
        };
      }
    > = {};
    disabledDates.forEach((date) => {
      dates[date] = {
        disabled: true,
        disableTouchEvent: true,
        customStyles: {
          container: {
            backgroundColor: "red",
          },
          text: {
            color: "white",
          },
        },
      };
    });
    return dates;
  };

  const renderCustomHeader = (date: Moment) => {
    const header = moment(date).format("MMMM YYYY");
    return (
      <View>
        <Text style={{ color: "white" }}>{header}</Text>
      </View>
    );
  };

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

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
        <View style={appointmentStyle.calendarContainer}>
          <Calendar
            monthFormat={"yyyy MM"}
            markingType={"multi-dot"}
            renderArrow={(direction: string) => (
              <AntDesign
                name={direction === "left" ? "arrowleft" : "arrowright"}
                size={24}
                color="white"
              />
            )}
            markedDates={{
              [selectedDate]: {
                selected: true,
                marked: true,
                selectedColor: "#383838",
              },
              ...getDisabledDates(), // Adiciona datas desabilitadas
            }}
            renderHeader={(date: Moment) => renderCustomHeader(date)}
            onDayPress={onDayPress}
            theme={{
              backgroundColor: "black",
              calendarBackground: "black",
              textSectionTitleColor: "white",
              dayTextColor: "white",
              todayTextColor: "white",
              textDisabledColor: "gray",
              monthTextColor: "white",
              indicatorColor: "white",
            }}
          />
        </View>

        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Escolha o horário
        </Text>
      </View>
    </MainStructure>
  );
};

export default Appointments;
