import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import LoginNavigator from './LoginNavigator';
import UserNavigator from './UserNavigator';
import LoginNavigator from './LoginNavigator';

function Navigator() {
  return (
    <NavigationContainer>
      <LoginNavigator />
      {/* <UserNavigator /> */}
    </NavigationContainer>
  );
}

export default Navigator;
