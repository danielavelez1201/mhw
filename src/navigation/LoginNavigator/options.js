import React from 'react';
import theme from '../../theme';
import Icon from 'react-native-vector-icons/Feather';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';

const options = ({route}) => ({
  headerShown: route.name !== 'Start',
  headerStyle: {
    backgroundColor: '#000',
    shadowColor: 'transparent',
  },
  headerShadowVisible: false,
  headerTintColor: theme.colors.primary[300],
  title: '',
  headerBackTitleVisible: false,
  headerTransparent: true,
  gestureEnabled: true,
  header: ({navigation}) => {
    const insets = useSafeAreaInsets();
    return (
      <TouchableOpacity
        w="4"
        h="4"
        justifyContent="center"
        alignItems="center"
        style={{paddingTop: insets.top}}
        onPress={() => navigation.goBack()}>
        <Icon
          name="chevron-left"
          color={theme.colors.primary[300]}
          size={35}
          style={{width: 35, height: 35}}
        />
      </TouchableOpacity>
    );
  },
});

export default options;
