import { View, Text, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Movie } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import MoviesPoster from './MoviesPoster';


interface Props {
    movies: Movie[];
    title?: string;
    loadNextPage?: () => void;
}

export default function HorizontalCarousel({movies, title, loadNextPage}: Props) {

    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 2000);
    },[movies])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        if(isLoading.current) return;
        const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 300) >= contentSize.width;

        if(!isEndReached) return;

        isLoading.current = true;

        loadNextPage && loadNextPage();
    }



  return (
    <View style={{height: title ? 260: 220}}>
      <Text className='ml-5 text-[22px] text-gray-600 font-semibold mt-4 mb-2'>{title}</Text>

      <FlatList
       data={movies}
       renderItem={({item}) => <MoviesPoster movie={item} width={140} height={200}  />}
       keyExtractor={(item) => item.id.toString()}
       horizontal
       showsHorizontalScrollIndicator={false}
       onScroll={onScroll}
      />
    </View>
  )
}