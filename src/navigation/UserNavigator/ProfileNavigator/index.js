import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../../screens/Profile';
import Friend from '../../../screens/Friend';
import options from './options';

const Stack = createStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Friend"
      screenOptions={props => options(props)}
      detachInactiveScreens={false}>
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="Friend" component={Friend} />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
