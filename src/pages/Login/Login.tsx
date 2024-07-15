import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import loginStyle from "./style";

const Login = () => {
  return (
    <View style={loginStyle.container}>
      <View style={loginStyle.inputContainer}>
        <Image
          // esse estilo diferente é para transformar a imagem png preta em branca só com css
          style={[loginStyle.image, { tintColor: "white" }]}
          source={require("../../assets/barber-logo.png")}
        />
        <TextInput
          style={loginStyle.input}
          placeholder="Insira seu email"
          placeholderTextColor="white"
        />
        <TextInput
          style={loginStyle.input}
          placeholder="Insira sua senha"
          placeholderTextColor="white"
          secureTextEntry
        />

        <TouchableOpacity style={loginStyle.button}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={loginStyle.createAccountContainer}>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
