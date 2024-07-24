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
    gap: 5,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default barberCardStyle;
