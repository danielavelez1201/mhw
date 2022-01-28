import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Pass from '../../../screens/Pass';
import Place from '../../../screens/User/Restaurant';
import options from './options';
import Scanner from '../../../screens/Scanner';

const Stack = createStackNavigator();

function PassNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Pass"
      screenOptions={props => options(props)}
      detachInactiveScreens={false}>
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Pass" component={Pass} />
      <Stack.Screen name="Place" component={Place} />
    </Stack.Navigator>
  );
}

export default PassNavigator;
