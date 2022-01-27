import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Box, Image} from 'native-base';
import Map from '../../screens/User/Map';
import Restaurant from '../../screens/User/Restaurant';
import options from './options';
import Tabbar from '../../components/Tabbar';
import WalletIcon from '../../static/icons/wallet.png';
import PassportIcon from '../../static/icons/passport.png';
import ProfileIcon from '../../static/icons/profile.png';
import PassNavigator from './PassNavigator';
import PlaceNavigator from './PlaceNavigator';

const Tab = createBottomTabNavigator();

function UserNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      // tabBar={props => <Tabbar {...props} />}
      screenOptions={options}>
      <Tab.Screen
        name="Passes"
        component={PassNavigator}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Box alignItems="center" justifyContent="center">
              <Image
                source={WalletIcon}
                resizeMode="contain"
                alt="Passes"
                borderRadius={100}
                style={{width: 60, height: 60}}
              />
            </Box>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Box alignItems="center" justifyContent="center">
              <Image
                source={PassportIcon}
                resizeMode="contain"
                alt="Passport"
                borderRadius={100}
                style={{width: 60, height: 60}}
              />
            </Box>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Map}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Box alignItems="center" justifyContent="center">
              <Image
                source={ProfileIcon}
                resizeMode="contain"
                alt="Profile"
                borderRadius={100}
                style={{width: 60, height: 60}}
              />
            </Box>
          ),
        }}
      />
      <Tab.Screen
        name="PlaceNav"
        component={PlaceNavigator}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default UserNavigator;
