import React from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import theme from './theme';
// import Navigator from './navigation';

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        {/* <Navigator /> */}
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

export default App;
