import {useNavigation} from '@react-navigation/native';
import {Box, Divider, Image, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

function PlaceResult(props) {
  const navigation = useNavigation();
  const {name, location, uri} = props.place;
  return (
    <Box w="100%" style={{marginTop: 10}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PlaceNav', {
            screen: 'Place',
            params: {name, address: location},
          })
        }>
        <Box
          flexDirection="row"
          alignItems="center"
          style={{width: '100%', marginBottom: 10}}>
          <Image
            source={{
              uri,
            }}
            resizeMode="contain"
            alt="Place"
            borderRadius={100}
            style={{width: 80, height: 80, marginRight: 20}}
          />
          <Box style={{width: '100%'}}>
            <Text fontSize={20} fontWeight="bold" color="black">
              {name}
            </Text>
            <Text fontSize={16} color="#979797">
              {location}
            </Text>
          </Box>
        </Box>
        <Divider w="100%" />
      </TouchableOpacity>
    </Box>
  );
}

export default PlaceResult;
