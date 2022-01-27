import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Place from '../../../screens/User/Restaurant';
import options from './options';
import PassList from '../../../screens/Pass page/PassList';

const Stack = createStackNavigator();

function PlaceNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={props => options(props)}>
      <Stack.Screen name="Place" component={Place} />
      <Stack.Screen name="Pass" component={PassList} />
    </Stack.Navigator>
  );
}

// Pass TBD

export default PlaceNavigator;
