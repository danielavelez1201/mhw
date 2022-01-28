import {
  Container,
  Center,
  Input,
  InputLeftAddon,
  Image,
  Text,
  Box,
  ScrollView,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AdaptiveSafeAreaView from '../../components/AdaptiveSafeAreaView';
import ModifiedKeyboardAvoidingView from '../../components/ModifiedKeyboardAvoidingView';
import prettifyPhoneNum from '../../functions/prettifyPhoneNum';
import PassportLogo from '../../static/images/Logo.png';
import PhoneIcon from '../../static/icons/phone.png';
import MetamaskIcon from '../../static/icons/metamask.png';
import cardShadow from '../../constants/cardShadow';
import primaryCardShadow from '../../constants/primaryCardShadow';
import PassSearch from '../../components/PassSearch/index.js';
import Pass from './Pass';

const PASSES = [
  {
    title: 'Burma Love',
    points: 320,
    status: 0,
    customerScore: 200,
    referralScore: 120,
  },
  {
    title: 'Burma Love',
    points: 450,
    status: 1,
    customerScore: 200,
    referralScore: 120,
  },
  {
    title: 'Burma Love',
    points: 330,
    status: 0,
    customerScore: 200,
    referralScore: 120,
  },
  {
    title: 'Burma Love',
    points: 800,
    status: 3,
    customerScore: 200,
    referralScore: 120,
  },
  {
    title: 'Burma Love',
    points: 321,
    status: 0,
    customerScore: 200,
    referralScore: 120,
  },
  {
    title: 'Burma Love',
    points: 451,
    status: 1,
    customerScore: 200,
    referralScore: 120,
  },
  {
    title: 'Burma Love',
    points: 331,
    status: 0,
    customerScore: 200,
    referralScore: 120,
  },
  {
    title: 'Burma Love',
    points: 801,
    status: 3,
    customerScore: 200,
    referralScore: 120,
  },
];

function PassList(props) {
  return (
    <AdaptiveSafeAreaView style={{backgroundColor: 'white'}}>
      <Text
        ml="5"
        mt="5"
        fontSize="4xl"
        fontWeight="bold"
        color="primary.300"
        mb="5">
        Passes
      </Text>
      <Container flex={1} ml="5">
        <PassSearch></PassSearch>
        <ScrollView width="100%" p="5">
          {PASSES.map(pass => (
            <Pass data={pass} key={pass.title + pass.points} />
          ))}
        </ScrollView>
      </Container>
    </AdaptiveSafeAreaView>
  );
}

export default PassList;
