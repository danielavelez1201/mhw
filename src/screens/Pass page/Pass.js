import React from 'react';
import {Input, Box, InputLeftAddon, Text, Image, Container} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../theme';
import primaryCardShadow from '../../constants/primaryCardShadow';
import BurmaLove from '../../static/images/BurmaLove.png';
import LinearGradient from 'react-native-linear-gradient';

function Pass(props) {
  return (
    <Box
      mb="2"
      w="100%"
      p="2"
      flexDir="row"
      borderWidth={3}
      borderRadius={10}
      borderColor="transparent"
      bgColor="#fff"
      style={primaryCardShadow}>
      <Image
        alt="Burma Love Logo"
        h="20"
        source={BurmaLove}
        resizeMode="contain"
      />
      <Container flexDir="column">
        <Text fontSize="xl" fontWeight="bold" color="primary.300">
          Burma Love
        </Text>
        <Text pb="1" fontSize="sm" fontWeight="bold" color="secondary.300">
          Star Patron
        </Text>
        <Container h="2" mb="1">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#4BE1EC', '#8AA1ED', '#CB5EEE']} // all three colors if full, only 1 or 2 depending on progress
            style={styles.linearGradient}>
            <Text></Text>
          </LinearGradient>
          <Container
            zIndex="-1"
            w="200"
            h="2"
            bg="white"
            borderWidth={1}
            borderRadius={10}
            borderColor="#DADADA"
            position="absolute"></Container>
        </Container>
        <Text fontSize="sm" fontWeight="bold" color="secondary.300">
          25pts to Legendary
        </Text>
      </Container>
    </Box>
  );
}

var styles = {
  linearGradient: {
    zIndex: 1,
    paddingRight: 70, // from 0 to 160 based on progress
    borderRadius: 5,
  },
};

export default Pass;
