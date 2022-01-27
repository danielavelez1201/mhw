import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PassList from '../../../screens/Pass page/PassList';
import Pass from '../../../screens/Pass page/Pass';
import Place from '../../../screens/User/Restaurant';
import options from './options';

const Stack = createStackNavigator();

function PassNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={props => options(props)}
      detachInactiveScreens={false}>
      <Stack.Screen name="List" component={PassList} />
      <Stack.Screen name="Pass" component={PassList} />
      <Stack.Screen name="Place" component={Place} />
    </Stack.Navigator>
  );
}

// Pass TBD

export default PassNavigator;
