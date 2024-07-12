import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      {/* essa status bar funciona melhor no android */}
      <StatusBar backgroundColor="#000" animated />
      <Routes />
    </NavigationContainer>
  );
}
