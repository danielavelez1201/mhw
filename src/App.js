import React from 'react';
import {LogBox} from 'react-native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import theme from './theme';
import Navigator from './navigation';

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Navigator />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default App;
