import React from 'react';
import {Input, Box, InputLeftAddon, Text, Image, Container} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../theme';
import primaryCardShadow from '../../constants/primaryCardShadow';
import BurmaLove from '../../static/images/BurmaLove.png';
import LinearGradient from 'react-native-linear-gradient';

export const LEVELS = [
  {name: 'Godly', points: 300},
  {name: 'Awesome', points: 400},
  {name: 'OMG', points: 500},
  {name: 'Incredible', points: 1000},
];

function Pass(props) {
  let nextLevel = LEVELS[Math.min(props.data.status + 1, 3)];
  const pointsLeft = nextLevel.points - props.data.points;

  var styles = {
    linearGradient: {
      zIndex: 1,
      paddingRight: 120 * (props.data.points / 1000), // from 0 to 120 based on progress
      borderRadius: 5,
    },
  };

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
      <Image alt="Burma Love Logo" h="100" w="100" source={BurmaLove} />
      <Container ml="5" flexDir="column">
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
            colors={['#4BE1EC', '#8AA1ED', '#CB5EEE'].slice(
              0,
              Math.round(3 * (props.data.points / 1000)) + 1,
            )} // all three colors if full, only 1 or 2 depending on progress
            style={styles.linearGradient}>
            <Text></Text>
          </LinearGradient>
          <Container
            zIndex="-1"
            w="160"
            h="2"
            bg="white"
            borderWidth={1}
            borderRadius={10}
            borderColor="#DADADA"
            position="absolute"></Container>
        </Container>
        <Text fontSize="sm" fontWeight="bold" color="secondary.300">
          {pointsLeft} to {nextLevel.name}
        </Text>
      </Container>
    </Box>
  );
}

export default Pass;
