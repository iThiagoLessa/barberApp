import { StyleSheet } from "react-native";

const appointmentStyle = StyleSheet.create({
  mainContainerWrapper: {
    flex: 1,
    backgroundColor: "#383838",
  },
  statusBarBackground: {
    height: 44, // Altura padrão da StatusBar no iPhone X e superior
    backgroundColor: "#191919", // Cor de fundo da StatusBar
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 40,
    paddingLeft: 20,
    backgroundColor: "#191919",
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
});

export default appointmentStyle;
