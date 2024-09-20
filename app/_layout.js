import React, { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { View, Image, TouchableOpacity, Text, Modal, Pressable } from 'react-native';
import perfil from '../assets/perfil.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigationState } from '@react-navigation/native';

export default function Layout() {
  const router = useRouter();
  const routeName = useNavigationState(state => state.routes[state.index]?.name);
  const [modalVisible, setModalVisible] = useState(false);
  const [toggled, setToggledIng] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeSession = async () => {
      await AsyncStorage.removeItem('isLoggedIn');
      router.push('/Onboarding')
  }

  const Edit_profile = () => {
    router.push('/Perfil')
  }


  const verify_session = async () => {
    const user = await AsyncStorage.getItem('isLoggedIn');
    if(user !== 'true'){
      setToggledIng(false)
    }else{
      setToggledIng(true)
    }
  }

  
  useEffect(() => {
    const interval = ( !toggled) ? setInterval(() => {
      verify_session();
      }, 2000) : ''; 

    return () => clearInterval(interval); 
  }, [router]);



  return (
    <View className="flex-1">
        
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'white' },
          headerTitleAlign: 'center',
          title: ((routeName === "Perfil" )? routeName : '' ) ,
          headerRight: () => (
            <View>
               {( (routeName !== "Perfil" && toggled === true ) || (routeName !== "Perfil" && toggled === true) ) && (
               <TouchableOpacity onPress={toggleModal} className="p-4">
                 <Image source={perfil} className="object-contain w-10 h-10 rounded-full" />
                 </TouchableOpacity>
               )}
            </View>
          ),
        }}
      />

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <Pressable 
          className="flex-1" 
          onPress={toggleModal}
        >
          <View className="absolute top-20 right-4 bg-white p-4 rounded-lg shadow-lg">
            <TouchableOpacity className="mb-2" onPress={() => Edit_profile()}>
              <Text className="text-lg">Editar perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => closeSession()}>
              <Text className="text-lg text-red-500">Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );

}
