import { View } from "react-native";

export default function Screen({children}){
    return(
      <View className="mt-4 bg-gray-100  pt-4 px-2 ">
        {children}
      </View>
    )
}