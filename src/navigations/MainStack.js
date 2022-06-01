import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Navigator initialRouteName="HomeScreen">
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};

export default MainStack;
