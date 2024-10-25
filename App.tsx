import 'react-native-gesture-handler';
import {View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { HomeScreen } from './src/presentation/screens/home/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <View className="bg-blue-500 h-screen w-full">
       <HomeScreen />
      </View>
    </NavigationContainer>
  );
}
