import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

function AdaptiveSafeAreaView(props) {
  return (
    <SafeAreaView flex={1} backgroundColor="black" style={props.style}>
      {props.children}
    </SafeAreaView>
  );
}

export default AdaptiveSafeAreaView;
