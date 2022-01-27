import {Box, Button, Image, Text} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import cardShadow from '../../constants/cardShadow';
import photos from './photos';

function Carousel(props) {
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <Box width="100%" height="35%">
      <Image
        source={{uri: photos[photoIndex]}}
        resizeMode="stretch"
        alt="Restaurant"
        width="100%"
        height="100%"
        style={{opacity: 0.5}}
      />
      <Box
        position="absolute"
        backgroundColor="transparent"
        flex={1}
        flexDirection="row"
        style={{
          padding: 10,
          maxWidth: 100,
          bottom: 0,
          left: Dimensions.get('window').width * 0.5 - photos.length * 9 - 20,
        }}>
        {[...Array(photos.length)].map((_, i) => (
          <TouchableOpacity key={i} onPress={() => setPhotoIndex(i)}>
            <Box
              backgroundColor={i === photoIndex ? 'black' : '#C7C7C7'}
              width={4}
              height={4}
              borderRadius={100}
              marginHorizontal={5}
            />
          </TouchableOpacity>
        ))}
      </Box>
      <Button
        backgroundColor="#CB5EEE"
        position="absolute"
        bottom={1}
        right={1}
        borderRadius={10}
        style={[
          {
            width: 87.5,
            height: 40,
          },
          cardShadow,
        ]}
        onPress={() => {
          console.log('HI');
        }}>
        <Text fontWeight="bold" fontSize="sm" color="white">
          Share
        </Text>
      </Button>
    </Box>
  );
}

export default Carousel;
