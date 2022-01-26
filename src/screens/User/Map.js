import {Center, Container, Text} from 'native-base';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import AdaptiveSafeAreaView from '../../components/AdaptiveSafeAreaView';
import ModifiedKeyboardAvoidingView from '../../components/ModifiedKeyboardAvoidingView';

import Search from '../../components/Search';
import MapContainer from '../../components/MapContainer';

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
      <MapContainer />
      <Center style={{marginHorizontal: 20}}>
        <ModifiedKeyboardAvoidingView
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Search onChangeText={onSearch} />
        </ModifiedKeyboardAvoidingView>
      </Center>
    </AdaptiveSafeAreaView>
  );
}

export default Map;
