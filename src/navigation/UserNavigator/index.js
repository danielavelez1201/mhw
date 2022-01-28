import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Box, Image} from 'native-base';
import Map from '../../screens/User/Map';
import options from './options';
import Tabbar from '../../components/Tabbar';
import WalletIcon from '../../static/icons/wallet.png';
import PassportIcon from '../../static/icons/passport.png';
import ProfileIcon from '../../static/icons/profile.png';
import PassNavigator from './PassNavigator';
import PlaceNavigator from './PlaceNavigator';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Scanner from '../../screens/Scanner';
import ProfileNavigator from './ProfileNavigator';
import PassList from '../../screens/Pass page/PassList';
import Profile from '../../screens/Profile';

const Tab = createBottomTabNavigator();

function UserNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      // tabBar={props => <Tabbar {...props} />}
      screenOptions={options}>
      <Tab.Screen
        name="Passes"
        component={PassList}
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
              <TouchableOpacity
                onPress={() =>
                  navigation.reset({
                    routes: [{name: 'Map'}],
                    index: 0,
                  })
                }>
                <Image
                  source={PassportIcon}
                  resizeMode="contain"
                  alt="Passport"
                  borderRadius={100}
                  style={{width: 60, height: 60}}
                />
              </TouchableOpacity>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
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
        name="ProfileNav"
        component={ProfileNavigator}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="PlaceNav"
        component={PlaceNavigator}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="PassNav"
        component={PassNavigator}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default UserNavigator;
