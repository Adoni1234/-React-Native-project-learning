import { Image, View, TextInput, Pressable, Text } from "react-native";
import Screen from "../components/screens/screen";
import foto from "../assets/perfil.png";
import { IconCamera, IconEmail, IconPhone, IconsUsersProfile, IconUserName } from "../constants/Icons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ALERT_TYPE, AlertNotificationRoot, Toast } from "react-native-alert-notification";

export default function Profile() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const validateSession = async () => {
            const data = await AsyncStorage.getItem("user_1");
            if (data) {
                const user = JSON.parse(data);
                setName(user.name);
                setUsername(user.username);
                setEmail(user.email);
                setPhone(user.phone);
            }
        };
        validateSession();
    }, []); 

    const editData = async () => {
        const formData = {
            name: name,
            username: username,
            email: email,
            phone: phone
        };

        await AsyncStorage.setItem("user_1", JSON.stringify(formData));
        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Correcto',
            textBody: 'Profile updated successfully!',
        });
    };

    return (
        <AlertNotificationRoot>
        <Screen>
            <View>
                <View className="w-full justify-center items-center flex">
                    <Image source={foto} className="w-32 h-32 object-contain rounded-full" />
                    <View className="w-10 h-10 -top-8 ml-20 bg-yellow-500 rounded-full items-center">
                        <IconCamera className="pt-1.5" />
                    </View>
                </View>
                <View className="m-8 space-y-4">
                    <View className="border rounded-3xl flex-row">
                        <IconUserName className="mt-2.5 ml-2" />
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            className="w-full p-3"
                            placeholder="Full Name"
                        />
                    </View>
                    <View className="border rounded-3xl flex-row">
                        <IconsUsersProfile className="mt-3 ml-2" />
                        <TextInput
                            value={username}
                            onChangeText={setUsername}
                            className="w-full p-3"
                            placeholder="Username"
                        />
                    </View>
                    <View className="border rounded-3xl flex-row">
                        <IconEmail className="mt-3 ml-2" />
                        <TextInput
                            value={email}
                            onChangeText={setEmail}  
                            className="w-full p-3"
                            placeholder="Email"
                        />
                    </View>
                    <View className="border rounded-3xl flex-row">
                        <IconPhone className="mt-3 ml-2" />
                        <TextInput
                            value={phone}
                            onChangeText={setPhone}  
                            className="w-full p-3"
                            placeholder="Phone No"
                        />
                    </View>

                    <Pressable onPress={editData} className="rounded-3xl p-2 top-4 bg-yellow-400 items-center">
                        <Text className="font-bold m-2.5">Edit Profile</Text>
                    </Pressable>
                </View>
            </View>
        </Screen>
        </AlertNotificationRoot>
    );
}
