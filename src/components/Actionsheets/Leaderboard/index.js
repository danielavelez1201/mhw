import {
  Box,
  Text,
  useTheme,
  Slide,
  Heading,
  SectionList,
  Divider,
} from 'native-base';
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
import adjustForStatusBar from '../../../functions/adjustForStatusBar';
import {data, colorCodes} from './data';

function Leaderboard(props) {
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
              Leaderboard
            </Heading>
            <SectionList
              h="100%"
              backgroundColor={'white'}
              nestedScrollEnabled={true}
              contentContainerStyle={{
                paddingBottom: adjustForStatusBar(insets.bottom) + 80,
              }}
              ListEmptyComponent={
                <Box
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  style={{paddingTop: 25}}>
                  <Text fontSize="xl" color={'primary.500'}>
                    No leaderboard found!
                  </Text>
                </Box>
              }
              sections={data}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => {
                const {name, place, points} = item;
                return (
                  <>
                    <Box flexDirection="row" style={{marginVertical: 10}}>
                      <Box
                        flex={1}
                        alignItems="center"
                        justifyContent="center"
                        style={{marginRight: 20}}>
                        <Text
                          fontSize="xl"
                          fontWeight={'bold'}
                          color={place === 1 ? colors.primary[300] : '#979797'}>
                          #{place}
                        </Text>
                      </Box>
                      <Box flex={9} flexDirection="column">
                        <Text flex={1} fontSize="xl" fontWeight={'bold'}>
                          {name}
                        </Text>
                        <Text flex={1} color="#979797">
                          {points} points
                        </Text>
                      </Box>
                    </Box>
                    <Divider />
                  </>
                );
              }}
              renderSectionHeader={({section: {title}}) => (
                <Box
                  backgroundColor={colorCodes[title].bg}
                  style={{paddingVertical: 10, paddingHorizontal: 10}}>
                  <Heading fontSize="xl" color={colorCodes[title].txt}>
                    {title}
                  </Heading>
                </Box>
              )}
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

export default Leaderboard;
