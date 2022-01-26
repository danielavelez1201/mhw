import React from 'react';
import {StyleSheet} from 'react-native';

import MapView from 'react-native-maps';

function Map(props) {
  return (
    <MapView
      style={StyleSheet.absoluteFillObject}
      customMapStyle={[
        {
          featureType: 'road.arterial',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'road.local',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
      ]}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}

export default Map;
