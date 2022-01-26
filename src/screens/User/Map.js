import {Center, Container} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import AdaptiveSafeAreaView from '../../components/AdaptiveSafeAreaView';
import ModifiedKeyboardAvoidingView from '../../components/ModifiedKeyboardAvoidingView';
import MapView from 'react-native-maps';
import Search from '../../components/Search';

function Map(props) {
  const onSearch = text => {
    console.log(text);
    // setQuery(text);
    // setResults([]);
    // if (text !== '') {
    //   toggleSearching(true);
    //   clearTimeout(searchTimer);
    //   setSearchTimer(
    //     setTimeout(async () => {
    //       try {
    //         setResults(await search(text));
    //       } catch (error) {
    //         console.log(error);
    //       }
    //       toggleSearching(false);
    //     }, 3000),
    //   );
    // } else {
    //   toggleSearching(false);
    //   clearTimeout(searchTimer);
    // }
  };

  return (
    <AdaptiveSafeAreaView>
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
      <Center style={{marginHorizontal: 20}}>
        <Search onChangeText={onSearch} />
      </Center>
      <Center flex={1}>
        <Container
          flex={1}
          justifyContent="center"
          alignItems="center"
          w="100%"
          backgroundColor="white"></Container>
      </Center>
    </AdaptiveSafeAreaView>
  );
}

export default Map;
