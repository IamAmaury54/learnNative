import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParam } from '../../navigation/Navigation';

export const DetailsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParam>>();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Home')}><Text>DetailsScreen</Text></Pressable>
    </View>
  );
};
