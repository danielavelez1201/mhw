import fireAuth from '@react-native-firebase/auth';
import fireFuncs from '@react-native-firebase/functions';

const auth = fireAuth();
const functions = fireFuncs();

export {auth, functions};
