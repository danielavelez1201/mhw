import React from 'react';
import {Box} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../../theme';

const options = ({navigation, route}) => ({
  headerShown: route.name !== 'Map',
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
      route.name !== 'Map' && (
        <Box m={2}>
          {/* <NeumorphicButton
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "Food" }],
              })
            }
          > */}
          <Box w="4" h="4" justifyContent="center" alignItems="center">
            <Icon
              name="chevron-left"
              color={theme.colors.primary[500]}
              size={25}
              style={{width: 25, height: 25}}
            />
          </Box>
        </Box>
      )
    );
  },
});

export default options;
