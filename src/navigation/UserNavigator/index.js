import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Map from '../../screens/User/Map';
import PassList from '../../screens/Pass page/PassList';
import Restaurant from '../../screens/User/Restaurant';
import options from './options';
import Tabbar from '../../components/Tabbar';

const Tab = createBottomTabNavigator();

function UserNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Passes"
      tabBar={props => <Tabbar {...props} />}
      screenOptions={options}>
      {/* <Tab.Screen name="Map" component={Map} /> */}
      {/* <Tab.Screen name="Passes" component={PassList} /> */}
      <Tab.Screen name="Restaurant" component={Restaurant} />
    </Tab.Navigator>
  );
}

export default UserNavigator;
