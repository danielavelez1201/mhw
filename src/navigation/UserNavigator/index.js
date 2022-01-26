import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Map from '../../screens/User/Map';
import options from './options';

const Stack = createStackNavigator();

function UserNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={props => options(props)}>
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}

export default UserNavigator;
