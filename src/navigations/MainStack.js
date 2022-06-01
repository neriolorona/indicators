import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import ResourceScreen from '../screens/Resources';
import DetailScreen from '../screens/Detail';

const {Navigator, Screen} = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Navigator initialRouteName="HomeScreen">
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="ResourceScreen" component={ResourceScreen} />
      <Screen name="DetailScreen" component={DetailScreen} />
    </Navigator>
  );
};

export default MainStack;
