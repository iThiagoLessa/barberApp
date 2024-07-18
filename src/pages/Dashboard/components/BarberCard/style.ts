import { StyleSheet } from "react-native";

const barberCardStyle = StyleSheet.create({
  containerWrapper: {
    backgroundColor: "#191919",
    borderRadius: 8,
    padding: 30,
    marginTop: 30,
    flexDirection: "row",
    gap: 20,
  },
  circleImage: {
    backgroundColor: "#ff9000",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
  },
  descriptionWrapper: {
    flexDirection: "column",
  },
  informationWrapper: {
    marginTop: 15,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default barberCardStyle;
