import logo from "../assets/course.png"
import { Image, Pressable, Text, TextInput, View, Button } from "react-native";
import ScreenLogin from "../components/screens/ScreenLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useRootNavigationState, useRouter } from "expo-router";
import { ALERT_TYPE, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { useNavigationState } from "@react-navigation/native";

export default function Login(){
    const router = useRouter();
 
    const[username, SetUsername] = useState('')
    const[password, SetPassword] = useState('')
    const navigation = useNavigationState(state => state.routes[state.index].name)
    const [isValidatingSession, setIsValidatingSession] = useState(true);  

    useEffect(() => {
        const validateSession = async () => {
            const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
            if (isLoggedIn === 'true' && isValidatingSession === false) {
                router.replace('/Seach'); 
            } else {
                setIsValidatingSession(false);  
            }
        };

        validateSession();
    }, [router,navigation]);

    const handleSubmit = async () => {
        const user = await AsyncStorage.getItem('user_1');
        if (user !== null) {
            const parsedUser = JSON.parse(user);
            if(parsedUser.username === username && parsedUser.password === password){
                await AsyncStorage.setItem('isLoggedIn', 'true');
                router.push('Seach')
            }else{
                Toast.show({
                    type: ALERT_TYPE.WARNING,
                    title: 'Warning',
                    textBody: 'Password or username it is incorrectings',
                });
            }
        }
    }




    return(
        <AlertNotificationRoot>
         <ScreenLogin >
             <View className="items-center relative">
               <View className="items-center bg-[#E3EAF2] z-20 top-40 w-full rounded-b-3xl p-8 ">
                    <Image source={logo} className="object-container w-80 h-36 -top-14" />
               </View>

               <View className="bg-white items-center w-full mt-32 mb-[100%]">
                <View className="bg-white items-center w-full mt-16 mb-16">
                    <View className="items-start w-8/12 mb-3">
                      <Text className="text-3xl text-blue-600 font-bold">Login</Text>
                    </View>
                    <TextInput value={username} onChangeText={SetUsername} placeholder="Username" className="w-72 border p-1 border-gray-400 rounded-full mt-2" />
                    <TextInput value={password} onChangeText={SetPassword} placeholder="Password" className="w-72 border p-1 border-gray-400 rounded-full mt-2" />

                    <Pressable onPress={handleSubmit} className="bg-blue-700 p-2 w-72 rounded-full text-center mt-8">
                         <Text className="text-center text-white text-md">Sign in</Text>                
                    </Pressable>
                   </View>
                </View>
             </View>
         </ScreenLogin>
         </AlertNotificationRoot>
    )
}