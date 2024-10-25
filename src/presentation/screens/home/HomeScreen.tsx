import { View, Text } from 'react-native';
import React from 'react';
import { useMovies } from '../../hooks/useMovies';

export const HomeScreen = () => {

  const {} = useMovies();

  return (
    <View className="bg-red-500 w-full">
      <Text className="text-white">HomeScreens</Text>
    </View>
  );
};
