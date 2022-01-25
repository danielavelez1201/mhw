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

function PhoneNumber(props) {
  const [phoneNum, setPhoneNum] = useState('');

  const onChangePhoneNum = phoneNumber => {
    setPhoneNum(phoneNumber);
    const digits = phoneNumber.match(/^\((\d{3})\) (\d{3})-(\d{4})$/) || [];
    if (digits.length === 4) {
      const rawPhoneNumber = digits.slice(1).join('') || '';
      if (phoneNumber.length === 14) {
        props.navigation.navigate('PhoneCode', {
          phoneNumber,
          rawPhoneNumber,
        });
      }
    }
  };

  return (
    <AdaptiveSafeAreaView withGradient>
      <Center flex={1}>
        <Container
          flex={1}
          justifyContent="center"
          alignItems="center"
          w="100%">
          <Image
            alt="passport Logo"
            source={PassportLogo}
            resizeMode="contain"
          />
          <ModifiedKeyboardAvoidingView>
            <Box mt="10" mb="2" flexDir="column">
              <Box
                mb="2"
                w="100%"
                h="60"
                flexDir="row"
                borderWidth={3}
                borderColor="primary.300"
                borderRadius={10}>
                <InputLeftAddon
                  minW="20%"
                  children={
                    <Image
                      alt="Phone"
                      source={PhoneIcon}
                      resizeMode="contain"
                    />
                  }
                  bgColor="transparent"
                  borderWidth={0}
                />
                <Input
                  size="2xl"
                  w="80%"
                  borderWidth={0}
                  textContentType="telephoneNumber"
                  keyboardType="phone-pad"
                  maxLength={14}
                  fontSize="xl"
                  fontWeight="bold"
                  selectionColor="primary.300"
                  color="primary.300"
                  onChangeText={onChangePhoneNum}
                  placeholder="Phone Number"
                  placeholderTextColor="primary.300"
                  clearButtonMode="while-editing">
                  {prettifyPhoneNum(phoneNum)}
                </Input>
              </Box>
              <Text fontSize="md" fontWeight="bold" color="primary.300" mb="5">
                A passcode will be sent to this number
              </Text>
              <TouchableOpacity>
                <Box
                  w="100%"
                  h="60"
                  flexDir="row"
                  backgroundColor="white"
                  borderRadius={10}
                  style={cardShadow}>
                  <InputLeftAddon
                    minW="20%"
                    children={
                      <Image
                        alt="Metamask"
                        source={MetamaskIcon}
                        resizeMode="contain"
                      />
                    }
                    bgColor="transparent"
                    borderWidth={0}
                  />

                  <Box
                    flex={1}
                    w="80%"
                    justifyContent="center"
                    style={{padding: 8}}>
                    <Text fontSize="xl" color="#F5841F" fontWeight="bold">
                      Connect to Metamask
                    </Text>
                  </Box>
                </Box>
              </TouchableOpacity>
            </Box>
          </ModifiedKeyboardAvoidingView>
        </Container>
      </Center>
    </AdaptiveSafeAreaView>
  );
}

export default PhoneNumber;
