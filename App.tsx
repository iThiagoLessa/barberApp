import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#000"
        animated
        barStyle="dark-content"
        // translucent={true}
      />
      <Routes />
    </NavigationContainer>
  );
}
