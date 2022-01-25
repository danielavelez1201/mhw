import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

function AdaptiveSafeAreaView(props) {
  const {withGradient = false} = props;

  return withGradient ? (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['rgba(203, 94, 238, .50)', 'rgba(75, 225, 236, .50)']}
      style={{
        flex: 1,
      }}>
      <SafeAreaView flex={1} style={props.style}>
        {props.children}
      </SafeAreaView>
    </LinearGradient>
  ) : (
    <SafeAreaView flex={1} style={props.style}>
      {props.children}
    </SafeAreaView>
  );
}

export default AdaptiveSafeAreaView;
