import { View, Text, Image, Pressable } from "react-native";

export default function Course({data}){

    return(
       <View className="bg-[#fadede]  w-11/12 h-64 rounded-3xl justify-center ">

           <View className="relative">
             <Image source={data.image} className="w-full h-36 object-contain" />
             <View className="absolute -top-4 left-4 z-30">
               <Text className="font-bold text-xl">{data.title}</Text>
               {data.tittle2 && (
                   <Text className="font-bold text-xl">{data?.tittle2}</Text>
               )}
               <Text className="text-blue-500">{data.course}</Text>
             </View>
           </View>

       </View>   
    )

}