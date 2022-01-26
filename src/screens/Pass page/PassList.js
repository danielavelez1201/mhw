import {
  Container,
  Center,
  Input,
  InputLeftAddon,
  Image,
  Text,
  Box,
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

function PassList(props) {
  return (
    <AdaptiveSafeAreaView>
      <Text
        ml="5"
        mt="5"
        fontSize="4xl"
        fontWeight="bold"
        color="primary.300"
        mb="5">
        Passes
      </Text>
      <Container flex={1} ml="5" w="100%">
        <PassSearch></PassSearch>
        <Pass></Pass>
      </Container>
    </AdaptiveSafeAreaView>
  );
}

export default PassList;
