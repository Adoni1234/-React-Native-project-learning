import { Image, Text, View } from "react-native";
import abouts from "../assets/about.png"
import Screen from "../components/screens/screen";

export default function About(){
    return(
        <Screen>
         <Text className="font-bold text-center text-2xl">Sobre Nosotros</Text>  
            <Text className="font-semibold text-black m-4">Tu misión en la Tierra sería compartir todo lo que has aprendido 
             durante tus aventuras cósmicas, ayudando a la humanidad a entender mejor 
             su lugar en el cosmos y a inspirar a otros a explorar más allá de las fronteras conocidas.
             Podrías incluir historias de tus encuentros con criaturas exóticas, planetas misteriosos,
             y cómo has aplicado la tecnología avanzada que encontraste en tus viajes para mejorar la vida en la Tierra.</Text>  
            <Text className="font-semibold text-black m-4">Tu misión en la Tierra sería compartir todo lo que has aprendido 
             durante tus aventuras cósmicas, ayudando a la humanidad a entender mejor 
             su lugar en el cosmos y a inspirar a otros a explorar más allá de las fronteras conocidas.</Text>  
             <View className="flex-row" >
                 <View className="flex w-6/12">
                    <Text className="font-semibold text-black m-4">Esta narrativa te permite jugar con la creatividad y la imaginación, creando un perfil único y memorable que captura la atención de tus visitantes.</Text>
                    <Text className="font-semibold text-black m-4">Esta narrativa te permite jugar con la creatividad y la imaginación, creando un perfil único y memorable que captura la atención de tus visitantes.</Text>
                    <Text className="font-semibold text-black m-4">Esta narrativa te permite jugar con la creatividad y la imaginación, creando un perfil único y memorable que captura la atención de tus visitantes.</Text>
                 </View>
                <Image source={abouts} className="flex w-5/12" />
             </View>
        </Screen>
    )
}