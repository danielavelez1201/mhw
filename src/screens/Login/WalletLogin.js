// import AsyncStorage from '@react-native-async-storage/async-storage';
// // import BottomSheet from 'reanimated-bottom-sheet';
// // import Animated from 'react-native-reanimated';

// // import {Image, Text, TouchableOpacity} from 'react-native';
// //import WalletConnectProvider from '@walletconnect/react-native-dapp';

// import {useWalletConnect} from '@walletconnect/react-native-dapp';
// import React from 'react';
// import {Button, View, WebView} from 'native-base';
// import WalletConnectQRCodeModal from '@walletconnect/qrcode-modal';
// import WalletConnect from '@walletconnect/client';
// // import {Text} from 'native-base';
// // a;

// // function WalletLogin({walletServices, visible, connectToWalletService, uri}) {
// //   const renderContent = React.useCallback(() => {
// //     return walletServices.map((walletService, i) => (
// //       <TouchableOpacity
// //         key={`i${i}`}
// //         onPress={() => connectToWalletService(walletService, uri)}>
// //         <Image source={{uri: walletService.logo}} />
// //         <Text>{walletService.name}</Text>
// //       </TouchableOpacity>
// //     ));
// //   }, [walletServices, uri]);
// //   // return <BottomSheet renderContent={renderContent} {...etc} />;
// //   return <Text>HELLOOO</Text>;
// // }

// function WalletLogin() {
//   //const connector = useWalletConnect();
//   const connector = new WalletConnect(
//     {
//       // Required
//       uri: 'wc:8a5e5bdc-a0e4-47...TJRNmhWJmoxdFo6UDk2WlhaOyQ5N0U=',
//       // Required
//       clientMeta: {
//         description: 'WalletConnect Developer App',
//         url: 'https://walletconnect.org',
//         icons: ['https://walletconnect.org/walletconnect-logo.png'],
//         name: 'WalletConnect',
//       },
//     },
//     {
//       // Optional
//       url: '<YOUR_PUSH_SERVER_URL>',
//       type: 'fcm',
//       token: token,
//       peerMeta: true,
//       language: language,
//     },
//   );

//   const uri = connector.uri;
//   console.log('connector', connector);

//   if (!connector.connected) {
//     console.log('connector now', connector);
//     /**
//      *  Connect! 🎉
//      */
//     return (
//       <View>
//         <Button mt="200" title="Connect" onPress={() => connector.connect} />
//       </View>
//     );
//   }
//   return (
//     <Button title="Kill Session" onPress={() => connector.killSession()} />
//   );
// }

// export default WalletLogin;

// // function App() {
// //   const connector = useWalletConnect();
// //   return <>{/* awesome custom app here */}</>;
// // }

// // export default withWalletConnect(App, {
// //   redirectUrl:
// //     Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
// //   storageOptions: {
// //     asyncStorage: AsyncStorage,
// //   },
// //   renderQrcodeModal: props => <CustomBottomSheet {...props} />,
// // });

// // export default WalletLogin;
