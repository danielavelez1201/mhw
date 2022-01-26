import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Map from '../../screens/User/Map';
import options from './options';
import Tabbar from '../../components/Tabbar';

const Tab = createBottomTabNavigator();

function UserNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      tabBar={props => <Tabbar {...props} />}
      screenOptions={options}>
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
}

export default UserNavigator;
