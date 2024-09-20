import { View, Text, Image, FlatList, Dimensions, Pressable } from "react-native";
import { IconPlay, IconShopping, IconStar, IconsUsers } from "../constants/Icons";
import ScreenByid from "./screens/ScreenById";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const { width, height } = Dimensions.get('window');

export default function DetailCourse({ data }) {

  const [data_filtred, set_data_filtered] = useState([]);
  const [cant_buy, set_cant_buy] = useState();


  useEffect(() => {
    const count_buy = async () => {
      const data_count = await AsyncStorage.getItem('cart');
    
      const parsedData = data_count ? JSON.parse(data_count) : [];  
      const count = parsedData.length;

        set_cant_buy(count);
    }
    count_buy();

    const data_current = {id: data.id, title: data.title, price: data.price, image : data.image};
    set_data_filtered(data_current);
  }, [data]);

  const updateCart = async (item) => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      const updatedCart = existingCart ? JSON.parse(existingCart) : [];

      updatedCart.push(item);

      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      console.log('Carrito actualizado en session');
    } catch (error) {
      console.error('Error guardando en session', error);
    }
  };


 
  return (
    <ScreenByid>
      <View className="bg-[#fadede] w-full relative">
        <Image source={data.image} style={{ height: height * 0.4, width: width }} className="object-cover w-full mt-2" />

        <View className="absolute top-32 left-5 z-30">
          <Text className="font-bold text-2xl">{data?.title}</Text>

          <View className="flex-row space-x-4 mt-4">
            <View className="flex-row space-x-1">
              <IconsUsers />
              <Text className="text-gray-800 mt-1">{data?.person}</Text>
            </View>
            <View className="flex-row space-x-1">
              <IconStar />
              <Text className="text-gray-800 mt-1">{data?.star}</Text>
            </View>
          </View>

          <Text className="font-bold text-2xl mt-12">${data?.price}</Text>
        </View>

        <View className="bg-white rounded-3xl p-4 mt-15">
          <Text className="font-bold text-xl mt-8 ml-2">Course Content</Text>

          <View style={{ height: height * 0.3 }}>
            <FlatList
              data={data.course}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View className="flex-row mt-8">
                  <Text className="text-5xl font-bold opacity-25 text-gray-500">0{index + 1}</Text>
                  <View className="ml-4 flex-1">
                    <Text className="text-sm font-bold opacity-25 text-gray-500">{item.mins} mins</Text>
                    <Text className="text-md font-bold">{item.title}</Text>
                  </View>
                  <View className="ml-auto mr-1">
                    <IconPlay />
                  </View>
                </View>
              )}
              initialNumToRender={2}
              onEndReachedThreshold={0.5}
              style={{ marginBottom: 20 }}
            />
          </View>

          <View className="flex-row justify-center m-2 mb-12 mt-6">
              <Text className="text-black z-50 bg-yellow-500 w-6 rounded-full h-6 text-center left-1">{cant_buy}</Text> 
               <Link asChild href='/CartBuy'>
                 <Pressable className="bg-[#fadede] p-4 pt-2 rounded-full justify-center">
                      <IconShopping />
                 </Pressable>
               </Link>

            <Pressable
              onPress={() => updateCart(data_filtred)}
              className="bg-blue-400 p-6 pt-2 rounded-full ml-2 text-center"
              style={{ width: width * 0.75 }}
            >
              <Text className="text-white text-center top-1 font-bold">Buy Now</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenByid>
  );
}
