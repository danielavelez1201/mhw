import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Start from '../../screens/Login/Start';
import PhoneCode from '../../screens/Login/PhoneCode';
import options from './options';
import {WebView} from 'react-native-webview';
import {Container} from 'native-base';
import {useRef} from 'react';
import {View} from 'react-native';
import WalletLogin from '../../screens/Login/WalletLogin';
import DeSo from '../../screens/Login/DeSo';

const Stack = createStackNavigator();

function LoginNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={props => options(props)}>
      {/* <Stack.Screen name="WalletLogin" component={WalletLogin} /> */}
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="PhoneCode" component={PhoneCode} />
      <Stack.Screen name="DeSo" component={DeSo} />
    </Stack.Navigator>
  );
}

export default LoginNavigator;
