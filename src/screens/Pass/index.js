import {
  Box,
  Center,
  Container,
  Image,
  ScrollView,
  Text,
  useTheme,
} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import Levels from '../../components/Actionsheets/Levels';
import MoneySpent from '../../components/Actionsheets/MoneySpent';
import Referrals from '../../components/Actionsheets/Referrals';
import cardShadow from '../../constants/cardShadow';
import primaryCardShadow from '../../constants/primaryCardShadow';
import Burma from '../../static/images/BurmaLove.png';
import MoneySpentIcon from '../../static/images/Money.png';
import ReferralsIcon from '../../static/images/Referrals.png';
import theme from '../../theme';

function Pass(props) {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();
  const [moneySpentSheetOpen, toggleMoneySpentSheet] = useState(false);
  const [referralsSheetOpen, toggleReferralsSheet] = useState(false);
  const [levelSheetOpen, toggleLevelSheet] = useState(false);

  return (
    <Box
      style={{
        backgroundColor: 'white',
      }}>
      <ScrollView
        style={{
          marginHorizontal: 20,
          marginTop: insets.top,
          marginBotom: insets.bottom,
        }}>
        <Center>
          <Box
            borderRadius={10}
            height={300}
            width={300}
            backgroundColor="white"
            style={primaryCardShadow}>
            <Image
              source={Burma}
              resizeMode="contain"
              alt="Burma Love"
              style={{width: '100%', height: '100%', padding: 10}}
            />
            <Box position="absolute" top={1} right={1}>
              <TouchableOpacity>
                <Icon
                  name="share"
                  color={theme.colors.primary[300]}
                  size={25}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
            </Box>
          </Box>
          <Box
            backgroundColor="white"
            width={300}
            flex={1}
            justifyContent="center"
            marginTop={25}
            borderRadius={10}
            style={[cardShadow, {padding: 15}]}>
            <TouchableOpacity onPress={() => props.navigation.navigate('')}>
              <Box
                flexDirection="row"
                alignItems="center"
                marginHorizontal={10}
                style={{width: '100%'}}>
                <Image
                  source={{
                    uri: 'https://i.picsum.photos/id/883/200/200.jpg?hmac=evNCTcW3jHI_xOnAn7LKuFH_YkA8r6WdQovmsyoM1IY',
                  }}
                  resizeMode="contain"
                  alt="Restaurant"
                  borderRadius={100}
                  style={{width: 60, height: 60, marginRight: 10}}
                />
                <Box style={{width: '80%'}}>
                  <Text
                    fontSize={24}
                    fontWeight="bold"
                    color={theme.colors.primary[300]}>
                    Burma Love
                  </Text>
                  <Text fontSize={16} fontWeight="bold" color="#979797">
                    1 Belmont St Cambridge, MA 02138
                  </Text>
                </Box>
              </Box>
            </TouchableOpacity>
          </Box>
          <Box
            backgroundColor="white"
            width={300}
            flex={1}
            justifyContent="center"
            marginTop={25}
            borderRadius={10}
            style={[cardShadow, {padding: 15}]}>
            <Box
              flexDirection="column"
              style={{width: '100%', marginBottom: 10}}>
              <Text
                fontSize={24}
                fontWeight="bold"
                color="black"
                style={{marginBottom: 20}}>
                Next: <Text color="#DE9E11">Legendary</Text>
              </Text>
              <Container style={{height: 25, width: '100%'}} mb="1">
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#4BE1EC', '#8AA1ED', '#CB5EEE'].slice(
                    0,
                    Math.round(3 * (270 / 1000)) + 1,
                  )} // all three colors if full, only 1 or 2 depending on progress
                  style={{
                    zIndex: 1,
                    paddingRight: 120 * (500 / 1000), // from 0 to 120 based on progress
                    borderRadius: 5,
                    height: 25,
                  }}>
                  <Text></Text>
                </LinearGradient>
                <Container
                  zIndex="-1"
                  width="100%"
                  bg="white"
                  borderWidth={1}
                  borderRadius={10}
                  borderColor="#DADADA"
                  position="absolute"
                  style={{height: 25}}></Container>
              </Container>
              <Text fontSize={16} fontWeight="bold" color="black">
                <Text color={colors.primary[300]}>200</Text> / 275
              </Text>
            </Box>
            <Box
              style={{
                width: '100%',
                paddingTop: 10,
                borderTopColor: colors.light['400'],
                borderTopWidth: 1,
              }}>
              <Text fontSize={16} fontWeight="bold" color="#FB1B34">
                Godly (300)
              </Text>
            </Box>
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => {
                toggleLevelSheet(true);
              }}>
              <Box flex={1} alignItems="center" style={{width: '100%'}}>
                <Text fontSize={12} color="black">
                  5 more levels
                </Text>
                <Icon
                  name="chevron-down"
                  color="black"
                  size={25}
                  style={{width: 25, height: 25}}
                />
              </Box>
            </TouchableOpacity>
          </Box>
          <Box
            backgroundColor="white"
            width={300}
            flex={1}
            justifyContent="center"
            marginTop={25}
            borderRadius={10}
            style={[cardShadow, {padding: 15}]}>
            <Box
              flexDirection="row"
              alignItems="center"
              marginHorizontal={10}
              style={{width: '100%'}}>
              <Image
                source={MoneySpentIcon}
                resizeMode="contain"
                alt="Money Spent"
                borderRadius={100}
                style={{width: 100, height: 100, marginRight: 10}}
              />
              <Box style={{width: '80%'}}>
                <Text
                  fontSize={24}
                  fontWeight="bold"
                  color={theme.colors.primary[300]}>
                  Money Spent
                </Text>
                <Text fontSize={16} color={theme.colors.primary[300]}>
                  120 / $24
                </Text>
                <Text fontSize={16} color="#979797">
                  5 / $1
                </Text>
              </Box>
            </Box>
            <Box style={{width: '100%'}}>
              <Text fontSize={16} fontWeight="bold" color="black">
                $10
              </Text>
              <Text fontSize={12} color="#979797">
                April 20, 2022
              </Text>
            </Box>
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => {
                toggleMoneySpentSheet(true);
              }}>
              <Box flex={1} alignItems="center" style={{width: '100%'}}>
                <Text fontSize={12} color="black">
                  5 other transactions
                </Text>
                <Icon
                  name="chevron-down"
                  color="black"
                  size={25}
                  style={{width: 25, height: 25}}
                />
              </Box>
            </TouchableOpacity>
          </Box>
          <Box
            backgroundColor="white"
            width={300}
            flex={1}
            justifyContent="center"
            marginTop={25}
            borderRadius={10}
            style={[cardShadow, {padding: 15}]}>
            <Box
              flexDirection="row"
              alignItems="center"
              marginHorizontal={10}
              style={{width: '100%'}}>
              <Image
                source={ReferralsIcon}
                resizeMode="contain"
                alt="Referrals"
                borderRadius={100}
                style={{width: 100, height: 100, marginRight: 10}}
              />
              <Box style={{width: '80%'}}>
                <Text
                  fontSize={24}
                  fontWeight="bold"
                  color={theme.colors.primary[300]}>
                  Referrals
                </Text>
                <Text fontSize={16} color={theme.colors.primary[300]}>
                  130 / 13 people
                </Text>
                <Text fontSize={16} color="#979797">
                  10 / person
                </Text>
              </Box>
            </Box>
            <Box style={{width: '100%'}}>
              <Text fontSize={16} fontWeight="bold" color="black">
                Max Verstappen
              </Text>
              <Text fontSize={12} color="#979797">
                April 20, 2022
              </Text>
            </Box>
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => {
                toggleReferralsSheet(true);
              }}>
              <Box flex={1} alignItems="center" style={{width: '100%'}}>
                <Text fontSize={12} color="black">
                  2 other referrals
                </Text>
                <Icon
                  name="chevron-down"
                  color="black"
                  size={25}
                  style={{width: 25, height: 25}}
                />
              </Box>
            </TouchableOpacity>
          </Box>
        </Center>
      </ScrollView>
      <MoneySpent
        onClose={() => {}}
        isVisible={moneySpentSheetOpen}
        toggleVisible={toggleMoneySpentSheet}
      />
      <Referrals
        onClose={() => {}}
        isVisible={referralsSheetOpen}
        toggleVisible={toggleReferralsSheet}
      />
      <Levels
        onClose={() => {}}
        isVisible={levelSheetOpen}
        toggleVisible={toggleLevelSheet}
      />
    </Box>
  );
}

export default Pass;
