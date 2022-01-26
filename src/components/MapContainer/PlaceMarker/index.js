import {Center, Image} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import cardShadow from '../../../constants/cardShadow';

function PlaceMarker(props) {
  const {uri, openCard} = props;

  return (
    <TouchableOpacity onPress={openCard}>
      <Center
        p="3"
        backgroundColor="white"
        borderRadius={100}
        style={cardShadow}>
        <Image
          source={{
            uri,
          }}
          resizeMode="contain"
          alt="Place"
          w="100"
          h="100"
          borderRadius={100}
        />
      </Center>
    </TouchableOpacity>
  );
}

export default PlaceMarker;
