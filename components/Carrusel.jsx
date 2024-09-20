import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import { styled } from 'nativewind';

const images = [
  require('../assets/image1.png'),
  require('../assets/imagen2.png'),
  require('../assets/image3.png'),
];

const screenWidth = Dimensions.get('window').width;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Carousel component is rendering");
    scrollViewRef?.current?.scrollTo({ x: currentIndex * screenWidth, animated: true });
  }, [currentIndex]);

  const scrollViewRef = React.useRef(null);

  return (
    <View className="h-64 w-5/12">
  <ScrollView
    ref={scrollViewRef}
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    scrollEnabled={false}
  >
    {images.map((image, index) => (
      <View key={index} className="w-24 h-24">
        <Image source={image} className="w-24 h-24 object-cover" />
      </View>
    ))}
  </ScrollView>
</View>
  );
};

export default styled(Carousel);
