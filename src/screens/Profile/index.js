import {
  Box,
  Center,
  Text,
  Image,
  Heading,
  FlatList,
  useTheme,
  ScrollView,
} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import AdaptiveSafeAreaView from '../../components/AdaptiveSafeAreaView';
import ProfilePicture from '../../static/images/profile.png';
import GalleryIcon from '../../static/icons/gallery.png';
import HeartFilledIcon from '../../static/icons/heartfilled.png';
import SearchIcon from '../../static/icons/search.png';
import theme from '../../theme';
import Showcase from '../../components/Actionsheets/Showcase';
import Places from '../../components/Actionsheets/Places';
import primaryCardShadow from '../../constants/primaryCardShadow';
import passes from './passes';
import places from './places';
import friends from './friends';
import FriendSearch from '../../components/FriendSearch';

function Profile(props) {
  const [showcaseSheetOpen, toggleShowcaseSheet] = useState(false);
  const [placesSheetOpen, togglePlacesSheet] = useState(false);
  const [isSearching, toggleSearching] = useState(false);

  const {colors} = useTheme();
  const onSearch = text => {
    console.log(text);
  };

  return (
    <AdaptiveSafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView nestedScrollEnabled style={{marginHorizontal: 20}}>
        <Box
          flexDirection="row"
          alignItems="center"
          marginHorizontal={10}
          style={{width: '100%'}}>
          <Image
            source={ProfilePicture}
            resizeMode="contain"
            alt="Profile"
            borderRadius={100}
            style={{width: 120, height: 120, marginRight: 10}}
          />
          <Box style={{width: '60%'}}>
            <Text fontSize={24} fontWeight="bold" color="black">
              Ivan Zhang
            </Text>
            <Text fontSize={14} fontWeight="bold" color="#979797">
              0xde0B295669...c85E40f4cb697BAe
            </Text>
          </Box>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Heading color={theme.colors.primary[300]} fontSize="3xl">
            Showcase
          </Heading>
          <Box flex={1} alignItems="flex-end" justifyContent="center">
            <TouchableOpacity
              onPress={() => {
                toggleShowcaseSheet(true);
              }}>
              <Image
                source={GalleryIcon}
                resizeMode="contain"
                alt="Gallery"
                borderRadius={100}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </Box>
        </Box>
        <ScrollView height={350} contentContainerStyle={{alignItems: 'center'}}>
          {passes.map(({name, level, hex, from, uri}, index) => (
            <Box
              key={index}
              py={5}
              marginBottom={5}
              flex={1}
              flexDir="row"
              w="100%"
              justifyContent="center"
              alignItems="center"
              backgroundColor="white"
              borderRadius={10}
              style={primaryCardShadow}>
              <Image
                source={{
                  uri,
                }}
                resizeMode="contain"
                alt="Place"
                borderRadius={100}
                style={{width: 80, height: 80, marginHorizontal: 20}}
              />
              <Box
                style={{
                  width: '65%',
                  marginRight: 20,
                }}>
                <Text
                  fontSize={20}
                  fontWeight="bold"
                  color={colors.primary[300]}>
                  {name}
                </Text>
                <Text fontSize={16} fontWeight="bold" color={hex}>
                  {level}
                </Text>
                <Text fontSize={12} color="#979797">
                  Since {from}
                </Text>
              </Box>
            </Box>
          ))}
        </ScrollView>
        <Box
          flexDirection="row"
          alignItems="center"
          style={{marginVertical: 10}}>
          <Heading color={theme.colors.primary[300]} fontSize="3xl">
            Places
          </Heading>
          <Box flex={1} alignItems="flex-end" justifyContent="center">
            <TouchableOpacity
              onPress={() => {
                togglePlacesSheet(true);
              }}>
              <Image
                source={HeartFilledIcon}
                resizeMode="contain"
                alt="Places"
                borderRadius={100}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </Box>
        </Box>
        <ScrollView height={350}>
          {places.map(({name, location, uri}, index) => (
            <Box
              key={index}
              py={5}
              flex={1}
              flexDir="row"
              w="100%"
              justifyContent="center"
              alignItems="center"
              style={
                index !== places.length - 1 && {
                  borderBottomColor: colors.light['400'],
                  borderBottomWidth: 1,
                }
              }>
              <Image
                source={{
                  uri,
                }}
                resizeMode="contain"
                alt="Place"
                borderRadius={100}
                style={{width: 80, height: 80, marginRight: 20}}
              />
              <Box
                style={{
                  width: '65%',
                  marginRight: 20,
                }}>
                <Text fontSize={20} fontWeight="bold" color="black">
                  {name}
                </Text>
                <Text fontSize={16} color="#979797">
                  {location}
                </Text>
              </Box>
            </Box>
          ))}
        </ScrollView>
        <Box flexDirection="row" alignItems="center">
          <Heading color={theme.colors.primary[300]} fontSize="3xl">
            Friends
          </Heading>
          <Box flex={1} alignItems="flex-end" justifyContent="center">
            <TouchableOpacity
              onPress={() => {
                toggleSearching(prev => !prev);
              }}>
              <Image
                source={SearchIcon}
                resizeMode="contain"
                alt="Gallery"
                borderRadius={100}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </Box>
        </Box>
        {isSearching && <FriendSearch onChangeText={onSearch} />}
        <ScrollView height={350}>
          {friends.map(({name, numCollections}, index) => (
            <Box
              key={index}
              py={5}
              flex={1}
              flexDir="row"
              w="100%"
              justifyContent="center"
              alignItems="center"
              style={
                index !== places.length - 1 && {
                  borderBottomColor: colors.light['400'],
                  borderBottomWidth: 1,
                }
              }>
              <Image
                source={ProfilePicture}
                resizeMode="contain"
                alt="Place"
                borderRadius={100}
                style={{width: 80, height: 80, marginRight: 20}}
              />
              <Box
                style={{
                  width: isSearching ? '53%' : '65%',
                  marginRight: 20,
                }}>
                <Text fontSize={20} fontWeight="bold" color="black">
                  {name}
                </Text>
                <Text fontSize={16} color="#979797">
                  {numCollections} Collections
                </Text>
              </Box>
              {isSearching && (
                <TouchableOpacity
                  onPress={() => toggleSearching(prevState => !prevState)}>
                  <Image
                    source={HeartFilledIcon}
                    resizeMode="contain"
                    alt="Heart"
                    borderRadius={100}
                    style={{width: 40, height: 40}}
                  />
                </TouchableOpacity>
              )}
            </Box>
          ))}
        </ScrollView>
      </ScrollView>
      <Showcase
        onClose={() => {}}
        isVisible={showcaseSheetOpen}
        toggleVisible={toggleShowcaseSheet}
      />
      <Places
        onClose={() => {}}
        isVisible={placesSheetOpen}
        toggleVisible={togglePlacesSheet}
      />
    </AdaptiveSafeAreaView>
  );
}

export default Profile;
