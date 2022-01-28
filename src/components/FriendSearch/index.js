import React from 'react';
import {Input, Box, InputLeftAddon} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../theme';

function FriendSearch(props) {
  const {onChangeText = () => {}} = props;

  return (
    <Box
      mb="2"
      w="100%"
      h="60"
      flexDir="row"
      borderWidth={1}
      borderRadius={10}
      borderColor="#DADADA"
      bgColor="#fff">
      <InputLeftAddon
        minW="10%"
        children={
          <Icon
            name="search"
            color={theme.colors.primary[300]}
            size={25}
            style={{width: 25, height: 25}}
          />
        }
        bgColor="transparent"
        borderWidth={0}
      />
      <Input
        placeholder="Search for friends"
        clearButtonMode="while-editing"
        w="90%"
        borderWidth={0}
        fontSize="xl"
        selectionColor="primary.300"
        color="primary.300"
        onChangeText={onChangeText}
      />
    </Box>
  );
}

export default FriendSearch;
