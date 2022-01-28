import {Box, Image, Text} from 'native-base';
import React from 'react';
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
      w="100%"
      h="100%"
      borderRadius={10}
      style={[primaryCardShadow, {padding: 10}]}>
      <Box
        flexDirection="row"
        alignItems="center"
        style={{height: '100%', width: '100%'}}>
        <Image
          source={{
            uri,
          }}
          resizeMode="contain"
          alt="Place"
          borderRadius={100}
          style={{width: 100, height: 100, marginRight: 5}}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PlaceNav', {
              screen: 'Place',
              params: {name, address},
            })
          }>
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
        </TouchableOpacity>
      </Box>
    </Box>
  );
}

export default PlaceCard;
