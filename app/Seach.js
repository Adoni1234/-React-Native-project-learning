import {  Text, TextInput, View, FlatList, Pressable } from "react-native";
import Screen from "../components/screens/screen";
import { IconsSeach } from "../constants/Icons";
import image1 from "../assets/image1.png";
import image2 from "../assets/imagen2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import Course from "../components/Course";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Seach() {
  const [filter, setFilter] = useState('')
  const [arrayLis, SetArrayLis] = useState(list);
  const [username, set_usernarme] = useState('')


  let list = [
    {
      id: 1,
      title: "Ux Design",
      course: "35 course",
      image: image1,
    },
    {
      id: 2,
      title: "Marketing",
      course: "20 course",
      image: image2,
    },
    {
      id: 3,
      title: "Photography",
      course: "35 course",
      image: image3,
    },
    {
      id: 4,
      title: "Business",
      course: "35 course",
      image: image4,
    },
    {
      id: 5,
      title: "AI intelligent",
      course: "35 course",
      image: image5,
    },
    {
      id: 6,
      title: "Computes",
      course: "35 course",
      image: image6,
    }

  ];

  const handleTextChange = (text) => {
    setFilter(text);
  };
  
  const filtered = () => {
    const lowercasedFilter = filter.toLowerCase();
    const lists = list.filter((l) =>
      l.title.toLowerCase().includes(lowercasedFilter)
    );
    SetArrayLis(lists);
  };

  const obtain_username = async () =>{
    const data = await AsyncStorage.getItem("user_1")
    const format_data = JSON.parse(data)
    set_usernarme(format_data.username)
  }


  useEffect(() => {
    obtain_username();
    filtered();
  }, [filter]);


  return (
    <Screen>
      <Text className="font-bold ml-4 text-3xl">Hey {username},</Text>
      <Text className="font-light ml-4 text-lg">Find a course you want to learn</Text>

      <View className="bg-gray-200 rounded-3xl m-4 mt-8">
        <View className="flex-row ml-2 p-4">
          <IconsSeach />
          <TextInput
            value={filter}
            onChangeText={handleTextChange}
            className="ml-2 w-full"
            placeholder="Search for anything"
            keyboardType="default"
          />
        </View>
      </View>

      <View className="flex-row m-4">
        <Text className="font-bold text-xl">Categories</Text>
        <Text className="text-blue-500 text-lg ml-auto mt-1">See All</Text>
      </View>

      <FlatList
        data={arrayLis}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="w-1/2 p-2">
            <Link asChild href={`/${item.id}`}>
            <Pressable>
              <Course data={item} onPress={() => handlePress(item)} />
            </Pressable>
            </Link>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 15 }}
        contentContainerStyle={{ paddingBottom: 250 }}
      />
    </Screen>
  );
}
