import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Callout, Marker} from 'react-native-maps';
import PlaceCard from '../PlaceCard';
import PlaceMarker from '../PlaceMarker';

function Place(props) {
  const navigation = useNavigation();
  const [cardShown, toggleCardShown] = useState(false);
  const {coords, uri} = props;

  const openCard = () => {
    toggleCardShown(true);
  };

  const closeCard = () => {
    console.log('CLOSECARD');
    toggleCardShown(false);
  };

  return cardShown ? (
    <Marker
      coordinate={coords}
      onPress={() => {
        navigation.navigate('PlaceNav', {
          screen: 'Place',
          params: {name: 'Burma Love', address: '123'},
        });
      }}>
      <PlaceCard closeCard={closeCard} {...props} />
    </Marker>
  ) : (
    <Marker
      coordinate={coords}
      onPress={() => {
        console.log('CLOSE2');
        !cardShown && toggleCardShown(true);
      }}>
      <PlaceMarker uri={uri} />
    </Marker>
  );
}

export default Place;
