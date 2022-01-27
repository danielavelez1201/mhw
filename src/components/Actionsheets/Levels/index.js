import {Box, FlatList, Text, useTheme, Slide, Heading} from 'native-base';
import React, {useEffect} from 'react';
import {Dimensions, Pressable} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import data from './data';

function Levels(props) {
  const {onClose, isVisible, toggleVisible} = props;
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
            <Heading color="black" fontSize="3xl" style={{marginTop: 25}}>
              Levels
            </Heading>
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                const {level, points, color, perks} = item;
                return (
                  <Box
                    py={5}
                    flex={1}
                    flexDir="row"
                    justifyContent="center"
                    alignItems="center"
                    style={
                      index !== data.length - 1 && {
                        borderBottomColor: colors.light['400'],
                        borderBottomWidth: 1,
                      }
                    }>
                    <Box flex={3}>
                      <Text fontSize="xl" color={color} fontWeight="bold">
                        {level} ({points})
                      </Text>
                      {perks.map(perk => (
                        <Text
                          fontSize="md"
                          color={colors.light['400']}
                          key={perk}>
                          - {perk}
                        </Text>
                      ))}
                    </Box>
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
                      No levels found!
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

export default Levels;
