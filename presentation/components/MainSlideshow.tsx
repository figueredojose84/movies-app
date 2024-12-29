import { View, Text, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infraestructure/interface/movie.interface'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
interface Props {
  movies: Movie[];
}

const MainSlideshow = ({movies}: Props) => {
 const ref = useRef<ICarouselInstance>(null);
  return (
    <View className='h-[250px] w-full'>
      <Carousel
      ref={ref}
      data={movies}
      renderItem={({item}) => <Text>{item.title}</Text> }
      width={200}
      height={350}
      />
    </View>
  )
}

export default MainSlideshow