import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Map from '../../screens/User/Map';
import options from './options';
import Tabbar from '../../components/Tabbar';
import PassList from '../../screens/Pass page/PassList';

const Tab = createBottomTabNavigator();

function UserNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="PassList"
      tabBar={props => <Tabbar {...props} />}
      screenOptions={options}>
      <Tab.Screen name="Map" component={Map} />
      {/* <Tab.Screen name="Passes" component={PassList} /> */}
    </Tab.Navigator>
  );
}

export default UserNavigator;
