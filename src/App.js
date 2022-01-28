import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import theme from './theme';
import Navigator from './navigation';
import {UserContext} from './contexts/UserContext';
import {auth} from '../firebase';

function App() {
  const [userAuth, setUserAuth] = useState(null);
  const signOut = () => {
    setUserAuth(null);
    return auth.signOut().catch(err => console.log(err));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async auth => {
      if (!auth || !auth.uid) {
        setUserAuth(null);
        return;
      }
      setUserAuth(auth);
    });
    return unsubscribe;
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <UserContext.Provider
        value={{
          auth: userAuth,
          signOut,
        }}>
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />
          <Navigator />
        </SafeAreaProvider>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default App;
