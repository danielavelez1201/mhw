import {
  Container,
  Center,
  Input,
  InputLeftAddon,
  Image,
  Text,
  Box,
} from 'native-base';
import React, {useState} from 'react';
import AdaptiveSafeAreaView from '../../components/AdaptiveSafeAreaView';
import ModifiedKeyboardAvoidingView from '../../components/ModifiedKeyboardAvoidingView';
import prettifyPhoneNum from '../../functions/prettifyPhoneNum';
import PassportLogo from '../../static/images/Logo.png';
import PhoneIcon from '../../static/icons/phone.png';

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
    <AdaptiveSafeAreaView>
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
            <Box
              mt="10"
              mb="2"
              w="100%"
              h="60"
              flexDir="row"
              borderWidth={1}
              borderColor="primary.300"
              borderRadius={10}>
              <InputLeftAddon
                minW="20%"
                children={
                  <Image alt="Phone" source={PhoneIcon} resizeMode="contain" />
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
            <Text fontSize="md" color="primary.300">
              A passcode will be sent to this number
            </Text>
          </ModifiedKeyboardAvoidingView>
        </Container>
      </Center>
    </AdaptiveSafeAreaView>
  );
}

export default PhoneNumber;
