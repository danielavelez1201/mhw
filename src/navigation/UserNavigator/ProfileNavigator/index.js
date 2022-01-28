import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Friend from '../../../screens/Friend';
import options from './options';
import Pass from '../../../screens/Pass';
import Restaurant from '../../../screens/User/Restaurant';

const Stack = createStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Friend"
      screenOptions={props => options(props)}
      detachInactiveScreens={false}>
      <Stack.Screen name="Pass" component={Pass} />
      <Stack.Screen name="Place" component={Restaurant} />
      <Stack.Screen name="Friend" component={Friend} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
