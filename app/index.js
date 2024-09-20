import { ExpoRouter } from 'expo-router';
import Seach from "./Seach";
import Main from '../components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, View } from 'react-native';
import Onboarding from './Onboarding';


  export default function index(){

    return (
      <SafeAreaProvider>
      <View >
        <Onboarding />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
    )

  }