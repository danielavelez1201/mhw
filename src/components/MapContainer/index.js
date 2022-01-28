import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {customMapStyles} from './styles';
import theme from '../../theme';
import places from './places';
import Place from './Place';

function MapContainer(props) {
  const [currLoc, setCurrLoc] = useState(null);
  useEffect(() => {
    Geolocation.setRNConfiguration({
      authorizationLevel: 'whenInUse',
    });
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      position => {
        const {coords} = position;
        console.log(coords);
        setCurrLoc({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      error => console.log(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000},
    );
  }, []);

  return (
    currLoc && (
      <MapView
        style={StyleSheet.absoluteFillObject}
        customMapStyle={customMapStyles}
        initialRegion={{
          latitude: currLoc.latitude,
          longitude: currLoc.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        zoomEnabled={false}
        showsUserLocation
        followsUserLocation
        tintColor={theme.colors.primary[300]}>
        {places.map(({coords, place}, index) => (
          <Marker key={index} coordinate={coords}>
            <Place {...place} />
          </Marker>
        ))}
      </MapView>
    )
  );
}

export default MapContainer;
