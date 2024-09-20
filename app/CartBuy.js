import { FlatList, Image, Pressable, Text, View } from "react-native";
import Screen from "../components/screens/screen";
import image from "../assets/image1.png"
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CartBuy(){
    const [dataCart, setDataCard] = useState([])

    const extractor_data = async () => {
        data = await AsyncStorage.getItem("cart");
        data_values = JSON.parse( data );
        console.log(data_values)
        setDataCard(data_values)

    }
    useEffect(() => {
        extractor_data();
    },[])

    const delete_sesion = async (id) => {
        const data = dataCart;
        const data_update = [];
    
        data.forEach(d => {
            if (d.id !== id) {
                data_update.push({ 
                    id: d.id, 
                    title: d.title, 
                    price: d.price, 
                    image: d.image 
                });
            } else {
                console.log("Item no corresponde");
            }
        });
    
        setTimeout(async () => {
            await AsyncStorage.removeItem("cart");
        }, 100);
    
        setTimeout(async () => {
            await AsyncStorage.setItem("cart", JSON.stringify(data_update));
        }, 300);
    };


    return(
        <Screen>
            <View>
                 <Text className="font-bold text-3xl">Cart</Text>

                 <FlatList
                   data={dataCart}
                   keyExtractor={(item) => item.id}
                   renderItem={({ item }) => (

                      <View className="flex-row grid grid-cols-3 bg-white rounded-2xl w-full mt-8 h-24">
                         <Image source={item.image} className="object-cover w-24 h-24 ml-2 " />
                         <View className="mt-[7%] ml-2">
                             <Text className="font-bold text-md ">{item.title}</Text>
                             <Text className="font-semibold text-sm ">${item.price}</Text>
                         </View>
     
                         <View className="ml-auto mt-3 mr-3 space-y-2 items-center">
                             <Pressable onPress={() => delete_sesion(item.id)} className="font-semibold text-sm">
                                 <Text className="">Delete</Text>
                             </Pressable>
                             <Pressable className="font-semibold text-sm bg-yellow-400 rounded-lg ">
                                 <Text className="p-2 text-center">Buy Now</Text>
                             </Pressable>
                         </View>
                     </View> 
                   )}
                 />

            </View>
        </Screen>
    )
}