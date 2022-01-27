import React from 'react';
import {Input, Box, InputLeftAddon} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../theme';
import primaryCardShadow from '../../constants/primaryCardShadow';

function Search(props) {
  const {onChangeText = () => {}, onFocus = () => {}, width = '100%'} = props;

  return (
    <Box
      mb="2"
      w={width}
      h="60"
      flexDir="row"
      borderWidth={3}
      borderRadius={10}
      borderColor="transparent"
      bgColor="#fff"
      paddingRight={2}
      style={primaryCardShadow}>
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
        placeholder="Restaurant, Clubs, Parks, and more"
        clearButtonMode="while-editing"
        w="90%"
        borderWidth={0}
        fontSize="xl"
        selectionColor="primary.300"
        color="primary.300"
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
    </Box>
  );
}

export default Search;
