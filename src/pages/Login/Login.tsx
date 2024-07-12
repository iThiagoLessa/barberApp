import React from "react";
import { Image, Text, View } from "react-native";
import loginStyle from "./style";
// import Logo from "../../assets/barber-logo.png";

const Login = () => {
  return (
    <View style={loginStyle.container}>
      {/* <Image style={loginStyle.image} source={Logo}></Image> */}
      <Text> Login</Text>
    </View>
  );
};

export default Login;
