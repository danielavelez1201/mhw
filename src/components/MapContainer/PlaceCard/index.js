import {Box, Button, Center, Image, Text} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import primaryCardShadow from '../../../constants/primaryCardShadow';
import theme from '../../../theme';
import HeartFilledIcon from '../../../static/icons/heartfilled.png';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function PlaceCard(props) {
  const navigation = useNavigation();
  const {uri, name, address, likes, closeCard} = props;
  return (
    <Box
      bgColor="#fff"
      w="280"
      h="200"
      borderRadius={10}
      style={[primaryCardShadow, {padding: 10}]}>
      <Box
        flexDirection="row"
        alignItems="center"
        style={{height: 140, width: '100%'}}>
        <TouchableOpacity
          onPress={closeCard}
          style={{position: 'absolute', top: 0, right: 0}}>
          <Icon
            name="close"
            color={theme.colors.primary[300]}
            size={25}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri,
          }}
          resizeMode="contain"
          alt="Place"
          borderRadius={100}
          style={{width: 100, height: 100, marginRight: 5}}
        />
        <Box style={{width: 160}}>
          <Text
            fontSize={20}
            fontWeight="bold"
            color={theme.colors.primary[300]}>
            {name}
          </Text>
          <Text fontSize={14} color="#979797">
            {address}
          </Text>
          <Box
            flexDir="row"
            alignItems="center"
            style={{height: 23, width: '100%'}}>
            <Image
              source={HeartFilledIcon}
              resizeMode="contain"
              alt="Place"
              borderRadius={100}
              style={{width: 23, height: 23, marginRight: 5}}
            />
            {likes.map((uri, index) => (
              <Image
                key={index}
                source={{uri}}
                resizeMode="contain"
                alt="Place"
                borderRadius={100}
                style={{width: 23, height: 23, marginRight: 5}}
              />
            ))}
            <Text fontSize={10} color="#979797">
              23 more
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={{height: 40, paddingHorizontal: 20}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(203, 94, 238, .25)', 'rgba(75, 225, 236, .25)']}
          borderRadius={25}
          h="100%"
          style={{
            width: 87.5,
            marginRight: 25,
          }}>
          <Button
            backgroundColor="transparent"
            onPress={() => navigation.navigate('PlaceNav', {screen: 'Place'})}>
            <Text
              fontWeight="bold"
              fontSize="sm"
              color={theme.colors.primary[300]}>
              Check In
            </Text>
          </Button>
        </LinearGradient>
        <Button borderRadius={25} variant="outline" style={{width: 87.5}}>
          <Text fontSize="sm">Share</Text>
        </Button>
      </Box>
    </Box>
  );
}

export default PlaceCard;
