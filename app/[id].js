import {  View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import DetailCourse from "../components/DetailCourse";

export default function Detail(){
    const {id} = useLocalSearchParams();

    const list = [
      {
        id: "1",
        title: "Ux Design",
        person: "55",
        star: "4.1",
        price: "50",
        image: require('../assets/image1.png'),
        course: [
          { mins: '5:35', title: "Welcome to the Course" },
          { mins: '5:35', title: "Design Thinking Process" },
          { mins: '5:35', title: "Design Thinking - Into" },
          { mins: '5:35', title: "Design Thinking - Into" },
          { mins: '5:35', title: "Design Thinking - Into" },
          { mins: '5:35', title: "Design Thinking - Into" },
        ]
      },
      {
        id: "2",
        title: "Marketing",
        person: "55",
        star: "4.1",
        price: "50",
        image: require('../assets/imagen2.png'),
        course: [
          { mins: '5:35', title: "Welcome to the Course" },
          { mins: '5:35', title: "Design Thinking Process" },
          { mins: '5:35', title: "Design Thinking - Into" }
        ]
      },
      {
        id: "3",
        title: "Photography",
        person: "55",
        star: "4.1",
        price: "50",
        image: require('../assets/image3.png'),
        course: [
          { mins: '5:35', title: "Welcome to the Course" },
          { mins: '5:35', title: "Design Thinking Process" },
          { mins: '5:35', title: "Design Thinking - Into" },
          { mins: '5:45', title: "Design Thinking - Finally" }
        ]
      },
      {
        id: "4",
        title: "Business",
        person: "55",
        star: "4.1",
        price: "50",
        image: require('../assets/image4.png'),
        course: [
          { mins: '5:35', title: "Welcome to the Course" },
          { mins: '5:35', title: "Design Thinking Process" },
          { mins: '5:35', title: "Design Thinking - Into" },
          { mins: '5:35', title: "Design Thinking - Business" }
        ]
      },
      {
        id: "5",
        title: "AI intelligent",
        person: "55",
        star: "4.1",
        price: "50",
        image: require('../assets/image5.png'),
        course: [
          { mins: '5:35', title: "Welcome to the Course" },
          { mins: '5:35', title: "Design Thinking Process" },
          { mins: '5:35', title: "Design Thinking - Into" },
          { mins: '5:35', title: "Design Thinking - IA" }
        ]
      },
      {
        id: "6",
        title: "Computes",
        person: "55",
        star: "4.1",
        price: "50",
        image: require('../assets/image6.png'),
        course: [
          { mins: '5:35', title: "Welcome to the Course" },
          { mins: '5:35', title: "Design Thinking Process" },
          { mins: '5:35', title: "Design Thinking - Into" },
          { mins: '5:25', title: "Design Thinking - Cumpute" }
        ]
      },
    ];
  
    const selectedItem = list.find(item => item.id === id);


    return(
      <View>
         <DetailCourse data={selectedItem} />
      </View>
    )
}