import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Movie } from '../../../core/entities/movie.entity';
import MoviesPoster from './MoviesPoster';


interface Props {
    movies: Movie[]
    height?: number;
}

export default function PosterCarousel({height = 400, movies}: Props) {
  return (
    <SafeAreaView style={{height}} className=''>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
       movies.length > 0 && movies.map(movie => <MoviesPoster key={movie.id} movie={movie} />)
      }
    </ScrollView>
    </SafeAreaView>
  )
}