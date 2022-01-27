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
import MoneySpent from '../../components/Actionsheets/MoneySpent';
import Referrals from '../../components/Actionsheets/Referrals';
import Leaderboard from '../../components/Actionsheets/Leaderboard';
import Places from '../../components/Actionsheets/Places';
import Showcase from '../../components/Actionsheets/Showcase';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function Map(props) {
  const [isSearching, toggleSearching] = useState(false);
  const insets = useSafeAreaInsets();
  // const [moneySpentSheetOpen, toggleMoneySpentSheet] = useState(true);
  // const [referralsSheetOpen, toggleReferralsSheet] = useState(true);
  // const [leaderboardSheetOpen, toggleLeaderboardSheet] = useState(true);
  // const [placesSheetOpen, togglePlacesSheet] = useState(true);
  // const [showcaseSheetOpen, toggleShowcaseSheet] = useState(true);

  const cancelSearch = () => {
    toggleSearching(false);
    Keyboard.dismiss();
  };

  const onSearch = text => {
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
      {/* <MoneySpent
        onClose={() => {}}
        isVisible={moneySpentSheetOpen}
        toggleVisible={toggleMoneySpentSheet}
      />
      <Referrals
        onClose={() => {}}
        isVisible={referralsSheetOpen}
        toggleVisible={toggleReferralsSheet}
      />
      <Leaderboard
        onClose={() => {}}
        isVisible={leaderboardSheetOpen}
        toggleVisible={toggleLeaderboardSheet}
      />
      <Places
        onClose={() => {}}
        isVisible={placesSheetOpen}
        toggleVisible={togglePlacesSheet}
      />
       */}
    </AdaptiveSafeAreaView>
  );
}

export default Map;
