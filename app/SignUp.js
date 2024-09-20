import logo from "../assets/course.png"
import { Image, Pressable, Text, TextInput, View, Alert} from "react-native";
import ScreenLogin from "../components/screens/ScreenLogin";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function SignUp(){

    const router = useRouter();

    const[name, setName] = useState('')
    const[username, SetUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, SetPassword] = useState('')
    const[ConfiPassword, SetConfiPassword] = useState('')

    const handleSubmit = async () => {

        if(password === ConfiPassword){
            if (username && password) {
                const user = { name, username,email, password }; 
                await AsyncStorage.setItem('user_1', JSON.stringify(user))
                router.push('login');
            } 
        }else{
            Alert.alert("password not math")
        }
    }

    return(
        <ScreenLogin>
            <View className="items-center relative">
               <View className="items-center bg-[#E3EAF2]  top-24 w-full  p-8 ">
                    <Image source={logo} className="object-container w-80 h-36 -top-14" />
               </View>

               <View className="bg-white items-center w-full z-20 rounded-t-3xl mt-16 mb-[100%]">
                <View className="bg-white items-center w-full mt-16 mb-96">
                    <View className="items-start w-8/12 mb-3">
                      <Text className="text-3xl text-blue-600 font-bold">Sign Up</Text>
                    </View>
                    <TextInput value={name} onChangeText={setName} placeholder="Name" className="w-72 border p-1 border-gray-400 rounded-full mt-4" />
                    <TextInput value={username} onChangeText={SetUsername}  placeholder="Username" className="w-72 border p-1 border-gray-400 rounded-full mt-4" />
                    <TextInput value={email} onChangeText={setEmail} placeholder="Email" className="w-72 border p-1 border-gray-400 rounded-full mt-4" />
                    <TextInput value={password} onChangeText={SetPassword}  placeholder="Password" className="w-72 border p-1 border-gray-400 rounded-full mt-4" />
                    <TextInput value={ConfiPassword} onChangeText={SetConfiPassword}  placeholder="Confitmation Password" className="w-72 border p-1 border-gray-400 rounded-full mt-4" />
                    <Pressable onPress={handleSubmit} className="bg-blue-700 p-2 w-72 rounded-full text-center mt-8">
                         <Text className="text-center text-white text-md">Sign in</Text>                
                    </Pressable>
                   </View>
                </View>
             </View>
        </ScreenLogin>
    )
}