import React from 'react';
import {useRef} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

function DeSo(props) {
  const webViewRef = useRef(null);

  function handleMessage(event) {
    const data = JSON.parse(event.nativeEvent.data);
    console.log('data in onmessage', data, data.id);
    if (data.method === 'initialize') {
      console.log('initialize!!');
      const responseMessage = {
        id: data.id,
        service: 'identity',
        payload: {},
      };
      const clientResponseCode = `
      window.postMessage(${JSON.stringify(responseMessage)}, "*");
      true;
    `;
      console.log('webview', webViewRef.current);
      if (webViewRef.current) {
        console.log('injecting', clientResponseCode);
        webViewRef.current.injectJavaScript(clientResponseCode);
      }
    }
    if (data.method === 'derive') {
      console.log('derive!!!');
      console.log('payload', data.payload);
      props.navigation.navigate('Start');
    }
  }

  return (
    <View flex={1} style={{padding: 2, marginTop: 50, marginHorizontal: 10}}>
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://identity.deso.org/derive?webview=true',
        }}
        onMessage={handleMessage}></WebView>
    </View>
  );
}

export default DeSo;
