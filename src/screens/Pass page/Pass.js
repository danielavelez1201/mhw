import React from 'react';
import {Input, Box, InputLeftAddon} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../theme';
import primaryCardShadow from '../../constants/primaryCardShadow';

function Pass(props) {
  return (
    <Box
      mb="2"
      w="100%"
      h="60"
      flexDir="row"
      borderWidth={3}
      borderRadius={10}
      borderColor="transparent"
      bgColor="#fff"
      style={primaryCardShadow}></Box>
  );
}

export default Pass;
