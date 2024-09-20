import { View } from "react-native";

export default function ScreenByid({children}){
    return(
        <View className="bg-[#fadede]">
          {children}
        </View>
    )
}