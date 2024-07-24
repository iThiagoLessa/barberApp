import { Platform, StyleSheet } from "react-native";

const baberListStyle = StyleSheet.create({
  mainContainerWrapper: {
    flex: 1,
    backgroundColor: "#383838",
  },
  headerWrapper: {
    backgroundColor: "#191919",
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 40,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...(Platform.OS === "ios" && {
      marginTop: -10,
    }),
  },
  statusBarBackground: {
    height: 44, // Altura padrão da StatusBar no iPhone X e superior
    backgroundColor: "#191919", // Cor de fundo da StatusBar
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: "#383838",
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 40,
    paddingLeft: 20,
  },
  textWrapper: {
    alignContent: "flex-start",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
    textAlign: "left",
  },
  welcomeWrapperText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff9000",
    textAlign: "left",
  },
  nameWrapperText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
  },
  barberText: {
    fontSize: 24,
    color: "#fff",
  },
});

export default baberListStyle;
