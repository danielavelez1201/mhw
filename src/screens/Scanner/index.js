import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Image} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Passport from '../../static/icons/passport.png';
import {Camera} from 'expo-camera';
import theme from '../../theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function Scanner(props) {
  const insets = useSafeAreaInsets();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      console.log('Hello World');
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // if (true) {
  //   return <Profile />;
  // }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={console.log('Yay!')}
            style={{
              height: 80,
              width: 80,
              resizeMode: 'contain',
              marginTop: 'auto',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <Image source={Passport} alt="Take Picture" />
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity
        style={{position: 'absolute', top: insets.top, right: insets.right}}
        onPress={() => props.navigation.navigate('Map')}>
        <Icon
          name="close"
          color={theme.colors.primary[300]}
          size={40}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default Scanner;
