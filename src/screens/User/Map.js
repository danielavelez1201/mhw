import {Box, Center, Heading, ScrollView, Text} from 'native-base';
import React, {useState} from 'react';
import {Keyboard, TouchableOpacity} from 'react-native';
import AdaptiveSafeAreaView from '../../components/AdaptiveSafeAreaView';
import ModifiedKeyboardAvoidingView from '../../components/ModifiedKeyboardAvoidingView';
import Search from '../../components/Search';
import MapContainer from '../../components/MapContainer';
import TopSearchRow from '../../components/TopSearchRow';
import PlaceResult from '../../components/PlaceResult';
import {searchesA, searchesB} from './searches';
import places from './places';
import theme from '../../theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function Map(props) {
  const [isSearching, toggleSearching] = useState(false);
  const insets = useSafeAreaInsets();

  const cancelSearch = () => {
    toggleSearching(false);
    Keyboard.dismiss();
  };

  const onSearch = text => {};

  return (
    <AdaptiveSafeAreaView style={{backgroundColor: 'white'}}>
      {!isSearching && <MapContainer />}
      <Center style={{marginHorizontal: 20}}>
        <ModifiedKeyboardAvoidingView
          style={{
            height: isSearching ? '100%' : '0%',
            alignItems: 'center',
          }}>
          <Box
            flexDirection="row"
            alignItems="center"
            style={{marginTop: isSearching ? 0 : insets.top}}>
            <Search
              onChangeText={onSearch}
              onFocus={() => toggleSearching(true)}
              width={isSearching ? '80%' : '100%'}
            />
            {isSearching && (
              <TouchableOpacity
                width="20%"
                alignItems="center"
                justifyContent="center"
                onPress={cancelSearch}>
                <Text
                  marginLeft="5"
                  color={theme.colors.primary[300]}
                  fontWeight="bold"
                  fontSize="lg">
                  Cancel
                </Text>
              </TouchableOpacity>
            )}
          </Box>
          {isSearching && (
            <Box flex={1} w="100%" style={{marginVertical: 10, height: '100%'}}>
              <ScrollView nestedScrollEnabled={true}>
                <Heading color="black" fontSize="2xl">
                  Top Searches
                </Heading>
                <TopSearchRow searches={searchesA} />
                <TopSearchRow searches={searchesB} />
                {places.map(place => (
                  <PlaceResult key={place.name} place={place} />
                ))}
              </ScrollView>
            </Box>
          )}
        </ModifiedKeyboardAvoidingView>
      </Center>
    </AdaptiveSafeAreaView>
  );
}

export default Map;
