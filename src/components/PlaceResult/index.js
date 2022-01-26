import {Box, Divider, Image, Text} from 'native-base';
import React from 'react';

function PlaceResult(props) {
  const {name, location, uri} = props.place;
  return (
    <Box w="100%" style={{marginTop: 10}}>
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
    </Box>
  );
}

export default PlaceResult;
