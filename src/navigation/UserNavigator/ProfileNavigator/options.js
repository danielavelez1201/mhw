import React from 'react';
import {Box} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../../theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

const options = ({navigation, route}) => ({
  headerShown: route.name !== 'List',
  headerStyle: {
    backgroundColor: '#ffffff',
    shadowColor: 'transparent',
  },
  headerTintColor: theme.colors.primary[500],
  title: '',
  headerBackTitleVisible: false,
  headerTransparent: true,
  gestureEnabled: true,
  headerLeft: () => {
    return (
      <Box m={2}>
        <Box w="4" h="4" justifyContent="center" alignItems="center">
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                routes: [{name: 'Profile'}],
                index: 0,
              })
            }>
            <Icon
              name="chevron-left"
              color={theme.colors.primary[500]}
              size={40}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </Box>
      </Box>
    );
  },
});

export default options;
