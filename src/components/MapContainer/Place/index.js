import React, {useState} from 'react';
import PlaceCard from '../PlaceCard';
import PlaceMarker from '../PlaceMarker';

function Place(props) {
  const [cardShown, toggleCardShown] = useState(false);
  const {uri} = props;

  const openCard = () => {
    toggleCardShown(true);
  };

  const closeCard = () => {
    toggleCardShown(false);
  };

  return cardShown ? (
    <PlaceCard closeCard={closeCard} {...props} />
  ) : (
    <PlaceMarker uri={uri} openCard={openCard} />
  );
}

export default Place;
