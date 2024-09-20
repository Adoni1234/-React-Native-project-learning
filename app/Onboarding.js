import Screen from "../components/screens/screen";
import img from "../assets/imgPrevLogin.png";
import { Image, View, Text, Pressable, ActivityIndicator } from "react-native";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigationState } from '@react-navigation/native';

export default function Onboarding() {
  const router = useRouter();
  const routeName = useNavigationState(state => state.routes[state.index].name);
  const [toggledIn, settoggledIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateSession = async () => {
    setLoading(true);
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      settoggledIn(false);
    } else {
      settoggledIn(true);
      if (routeName === "Onboarding" || routeName === "index") {
        router.replace('/Seach'); 
      }
    }
    setLoading(false); 
  };

  useEffect(() => {
    validateSession();
    const interval = (routeName !== "Onboarding" || routeName !== "index" ) ? '' : setInterval(() => {
      console.log('Validando sesión...');
      validateSession();
    }, 1000) ;

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [routeName, toggledIn, router]);

  return (
    <Screen>
      <View className="text-center items-center">
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <View className="text-center items-center border-b-2 w-9/12">
              <Image
                source={img}
                className="object-cover w-96 h-96 m-0"
              />
            </View>
            <View className="mt-8 flex text-center items-center">
              <Text className="font-bold text-4xl">Hello</Text>
              <Text className="font-semibold text-gray-400 text-xl">
                Welcome to the course! Let's{"\n"} learn and grow together
              </Text>

              <Pressable className="bg-blue-700 p-3 w-60 rounded-full text-center mt-8">
                <Link asChild href="/login">
                  <Text className="text-center font-bold text-white text-lg">Login</Text>
                </Link>
              </Pressable>

              <Pressable className="bg-white p-3 w-60 rounded-full text-center mt-4 border-2 border-blue-800">
                <Link asChild href="/SignUp">
                  <Text className="text-center font-bold text-blue-500 text-lg">Sign Up </Text>
                </Link>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </Screen>
  );
}
