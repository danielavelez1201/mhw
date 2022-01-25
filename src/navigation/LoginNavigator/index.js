import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Start from '../../screens/Login/Start';
import PhoneCode from '../../screens/Login/PhoneCode';
import options from './options';

const Stack = createStackNavigator();

function LoginNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={props => options(props)}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="PhoneCode" component={PhoneCode} />
    </Stack.Navigator>
  );
}

export default LoginNavigator;
