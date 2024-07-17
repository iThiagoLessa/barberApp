import { StyleSheet } from "react-native";

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#626262",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 100,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flex: 1,
  },
  input: {
    backgroundColor: "#383838",
    width: "100%",
    color: "white",
    padding: 20,
    borderRadius: 8,
  },
  button: {
    width: "100%",
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  createAccountContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191919",
    width: "100%",
  },
  loginContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
  },
});

export default loginStyle;
