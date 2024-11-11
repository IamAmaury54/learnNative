import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';
import PosterCarousel from '../../components/movies/PosterCarousel';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();

  const {isLoading, nowPlaging, popular, topRate, upComing, popularNextPage} = useMovies();

  if(isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <ScrollView >
      <View style={{marginTop: top + 20, paddingBottom: 20}}>
        {/* Principal  */}
        <PosterCarousel movies={nowPlaging} />

        {/* Popular */}
        <HorizontalCarousel movies={popular} title="Popular" loadNextPage={popularNextPage} />

         {/* TopRate */}
         <HorizontalCarousel movies={topRate} title="Top Rate" />

           {/* UpComing */}
           <HorizontalCarousel movies={upComing} title="Upcoming" />

      </View>
    </ScrollView>
  );
};
