import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./components/Main";
import { StatusBar, View } from "react-native";
import Onboarding from "./app/Onboarding";



export default function App(){

      return(
        <>
    <SafeAreaProvider>
      <View >
        <StatusBar style="auto" />
        <ExpoRouter /> {/* Expo Router maneja la navegación aquí */}
        <Onboarding />
      </View>
    </SafeAreaProvider>
  </>
      )

}