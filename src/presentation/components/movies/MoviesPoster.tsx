import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {Movie} from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParam } from '../../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export default function MoviesPoster({
  movie,
  height = 380,
  width = 290,
}: Props) {

    const navigation = useNavigation<NavigationProp<RootStackParam>>();

  return (
    <Pressable style={({pressed}) => ({marginHorizontal: 2, paddingBottom: 20, paddingHorizontal: 3, opacity: pressed ? 0.5 : 1})} onPress={() => navigation.navigate('Details', {movieId: movie.id})}>
      <View style={{height, width}} className="h-full w-[300px] flex">
        <Image
          className="w-full h-full rounded-2xl shadow-2xl shadow-gray-900/50"
          source={{uri: movie.poster}}
        />
      </View> 
    </Pressable>
  );
}
