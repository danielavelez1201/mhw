import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Place from '../../../screens/User/Restaurant';
import options from './options';
import Pass from '../../../screens/Pass';
import Scanner from '../../../screens/Scanner';

const Stack = createStackNavigator();

function PlaceNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={props => options(props)}>
      <Stack.Screen name="Place" component={Place} />
      <Stack.Screen name="Pass" component={Pass} />
      <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  );
}

export default PlaceNavigator;
