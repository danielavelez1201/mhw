import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigator from './LoginNavigator';
import UserNavigator from './UserNavigator';
import {useUser} from '../contexts/UserContext';

function Navigator() {
  const {auth, user} = useUser();
  return (
    <NavigationContainer>
      <LoginNavigator />
      {auth !== null ? <UserNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}

export default Navigator;
