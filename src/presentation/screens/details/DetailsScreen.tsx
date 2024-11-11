import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParam } from '../../navigation/Navigation';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParam, 'Details'>{}

export const DetailsScreen = ({ route}: Props) => {

  const movieId = route.params;

  console.log(movieId.movieId);

  const router = useRoute();

  console.log(router.path)

  const navigation = useNavigation<NavigationProp<RootStackParam>>();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Home')}><Text>DetailsScreen</Text></Pressable>
    </View>
  );
};
