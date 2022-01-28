import {
  Center,
  Container,
  Box,
  Input,
  InputLeftAddon,
  Image,
  Spinner,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {auth} from '../../../firebase';
import AdaptiveSafeAreaView from '../../components/AdaptiveSafeAreaView';
import ModifiedKeyboardAvoidingView from '../../components/ModifiedKeyboardAvoidingView';
import LockIcon from '../../static/icons/lock.png';

function PhoneCode(props) {
  const [isPhoneCodeDisabled, togglePhoneCodeDisabled] = useState(false);
  const [isResending, toggleResending] = useState(false);
  const [resentTimer, setResentTimer] = useState();
  const [resentTimerCount, setResentTimerCount] = useState(0);
  const [phoneCode, setPhoneCode] = useState('');
  const [confirmCode, setConfirmCode] = useState(null);
  const {phoneNumber, rawPhoneNumber} = props.route.params;
  const firebasePhoneNum = `${rawPhoneNumber.substring(
    0,
    3,
  )}-${rawPhoneNumber.substring(3, 6)}-${rawPhoneNumber.substring(6)}`;

  const onChangePhoneCode = async code => {
    setPhoneCode(code);
    if (code.length === 6 && confirmCode !== null) {
      togglePhoneCodeDisabled(true);
      try {
        await confirmCode.confirm(code);
        clearInterval(resentTimer);
      } catch (error) {
        const msg =
          error.code === 'auth/invalid-verification-id' ||
          'auth/invalid-verification-code'
            ? 'Phone code invalid. Check the code again or send another one below 😅'
            : 'An error occurred while signing you up. Please try again 🥺';
        togglePhoneCodeDisabled(false);
        console.log(error);
        Alert.alert('Phone Code Error', msg, [
          {
            text: 'Dismiss',
            style: 'cancel',
          },
        ]);
      }
    }
  };

  const initResetTimer = () => {
    setResentTimerCount(30);
    setResentTimer(
      setInterval(() => setResentTimerCount(prevState => prevState - 1), 1000),
    );
  };

  const resendCode = async () => {
    toggleResending(true);
    try {
      const confirmation = await auth.signInWithPhoneNumber(
        `+1 ${firebasePhoneNum}`,
      );
      setConfirmCode(confirmation);
      initResetTimer();
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Phone Code Error',
        'An error occurred while signing you up. Please try again 🥺',
        [
          {
            text: 'Dismiss',
            style: 'cancel',
          },
        ],
      );
    }
    toggleResending(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(resentTimer);
    };
  }, []);
  useEffect(() => {
    resendCode();
  }, []);
  useEffect(() => {
    if (resentTimerCount <= 0) {
      clearInterval(resentTimer);
    }
  }, [resentTimerCount]);

  return (
    <AdaptiveSafeAreaView withGradient>
      <Center flex={1}>
        <Container
          flex={1}
          justifyContent="center"
          alignItems="center"
          w="100%">
          <ModifiedKeyboardAvoidingView
            style={{justifyContent: 'center', alignItems: 'center'}}>
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
                  <Image alt="Lock" source={LockIcon} resizeMode="contain" />
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
                onChangeText={onChangePhoneCode}
                placeholder="Passcode"
                placeholderTextColor="primary.300"
                clearButtonMode="while-editing">
                {phoneCode}
              </Input>
            </Box>
            <Text fontSize="sm" color="muted.500">
              Enter the passcode that was sent to
            </Text>
            <Text fontSize="sm" color="white" fontWeight="bold" mb="5">
              {phoneNumber}
            </Text>
            {isResending ? (
              <Box
                flexDirection="row"
                justifyContent="center"
                alignItems="center">
                <Spinner color="primary.400" size="sm" />
                <Text
                  fontSize="lg"
                  color="primary.400"
                  ml={3}
                  fontWeight="bold">
                  Sending
                </Text>
              </Box>
            ) : resentTimerCount <= 0 ? (
              <TouchableOpacity
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                mt="10"
                isDisabled={isPhoneCodeDisabled}
                onPress={resendCode}>
                <Text fontSize="lg" color="primary.300" fontWeight="bold">
                  Resend Code
                </Text>
              </TouchableOpacity>
            ) : (
              <>
                <Text fontSize="lg" color="primary.400">
                  Resent code!
                </Text>
                <Text fontSize="lg" color="primary.400">
                  Send again in{' '}
                  <Text fontSize="lg" color="primary.400" fontWeight="bold">
                    {resentTimerCount}
                  </Text>{' '}
                  seconds 😄
                </Text>
              </>
            )}
          </ModifiedKeyboardAvoidingView>
        </Container>
      </Center>
    </AdaptiveSafeAreaView>
  );
}
export default PhoneCode;
