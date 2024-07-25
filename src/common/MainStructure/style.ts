import { StyleSheet } from "react-native";

const mainStructureStyle = StyleSheet.create({
  mainContainerWrapper: {
    flex: 1,
    backgroundColor: "#383838",
  },
  statusBarBackground: {
    height: 44, // Altura padrão da StatusBar no iPhone X e superior
    backgroundColor: "#191919", // Cor de fundo da StatusBar
  },
});

export default mainStructureStyle;
