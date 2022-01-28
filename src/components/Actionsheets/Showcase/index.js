import {
  Box,
  FlatList,
  Text,
  useTheme,
  Slide,
  Heading,
  Image,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, Pressable, TouchableOpacity} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import passes from './passes';
import PlusIcon from '../../../static/icons/plus.png';
import HeartIcon from '../../../static/icons/heartfilled.png';
import PassSearch from '../../PassSearch';

function Showcase(props) {
  const {onClose, isVisible, toggleVisible} = props;
  const [isSearching, toggleSearching] = useState(false);
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();
  const dropdownY = useSharedValue(0);
  const dropdownAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: dropdownY.value}],
  }));

  const onDragGesture = useAnimatedGestureHandler({
    onActive: event => {
      if (event.translationY > 0) {
        dropdownY.value = event.translationY;
      }
    },
    onEnd: () => {
      'worklet';
      runOnJS(toggleVisible)(false);
    },
  });

  const onSearch = text => {
    console.log(text);
  };

  useEffect(() => {
    if (!isVisible) dropdownY.value = 0;
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <Pressable
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          backgroundColor="#000"
          opacity={0.3}
          onPress={() => {
            onClose();
            toggleVisible(false);
          }}
        />
      )}
      <Slide in={isVisible} placement="bottom">
        <PanGestureHandler onGestureEvent={onDragGesture}>
          <Animated.View
            style={[
              {
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                minHeight: 200,
                maxHeight: Dimensions.get('window').height * 0.8,
                width: '100%',
                paddingBottom: insets.bottom,
                paddingHorizontal: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
              },
              dropdownAnimatedStyles,
            ]}>
            <Box
              flexDirection="row"
              alignItems="center"
              style={{marginVertical: 10}}>
              <Heading color="black" fontSize="3xl">
                Showcase
              </Heading>
              <Box flex={1} alignItems="flex-end" justifyContent="center">
                <TouchableOpacity
                  onPress={() => toggleSearching(prevState => !prevState)}>
                  <Image
                    source={PlusIcon}
                    resizeMode="contain"
                    alt="Add"
                    borderRadius={100}
                    style={{width: 40, height: 40}}
                  />
                </TouchableOpacity>
              </Box>
            </Box>
            {isSearching && <PassSearch onChangeText={onSearch} />}
            <FlatList
              data={passes}
              renderItem={({item, index}) => {
                const {name, level, hex, from, uri} = item;
                return (
                  <Box
                    key={index}
                    py={5}
                    flex={1}
                    flexDir="row"
                    w="100%"
                    justifyContent="center"
                    alignItems="center"
                    style={
                      index !== passes.length - 1 && {
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
                        width: isSearching ? '53%' : '65%',
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
                    {isSearching && (
                      <TouchableOpacity
                        onPress={() =>
                          toggleSearching(prevState => !prevState)
                        }>
                        <Image
                          source={HeartIcon}
                          resizeMode="contain"
                          alt="Heart"
                          borderRadius={100}
                          style={{width: 40, height: 40}}
                        />
                      </TouchableOpacity>
                    )}
                  </Box>
                );
              }}
              keyExtractor={item => item.id}
              backgroundColor={'white'}
              ListEmptyComponent={
                <Box
                  flex={1}
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  mt={5}>
                  <Box
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    w="100%">
                    <Text fontSize="lg" color={'black'} w="100%">
                      No passes found!
                    </Text>
                  </Box>
                </Box>
              }
              mb="5"
            />
            <Box
              position="absolute"
              top="2"
              w="10"
              h="1"
              borderRadius={25}
              backgroundColor={colors.light['400']}
              alignSelf="center"
            />
          </Animated.View>
        </PanGestureHandler>
      </Slide>
    </>
  );
}

export default Showcase;
