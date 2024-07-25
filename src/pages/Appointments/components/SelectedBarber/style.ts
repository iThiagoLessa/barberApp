import { StyleSheet } from "react-native";
import { ITEM_WIDTH } from "../..";

const selectedBarberStyle = (isSelected?: boolean) =>
  StyleSheet.create({
    containerWrapper: {
      backgroundColor: isSelected ? "#EB8E2E" : "#6C6B6B",
      paddingTop: 10,
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 15,
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      height: 80,
      width: ITEM_WIDTH,
    },
    imageWrapper: {
      borderRadius: 9999,
      width: 60,
      height: 60,
      resizeMode: "cover",
      overflow: "hidden",
    },
    nameText: {
      color: isSelected ? "white" : "black",
      fontSize: 20,
    },
  });

export default selectedBarberStyle;
