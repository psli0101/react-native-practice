import React, { Component } from 'react';
import { StyleSheet, View, Text, Linking, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Button } from 'native-base';

export default class QRScanner extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      QR_URL: 'https://hackmd.io/@psli0101/SyK3V-PlS',
      start: false,
    }
  }

  openLink = () => {
    Linking.openURL(this.state.QR_URL);
  };

  scannerQRcode = () => {
    Alert.alert(
      'Open?',
      this.state.QR_URL,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: this.openLink},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={this.onBarCodeRead}
        /> */}
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <Button onPress={this.scannerQRcode}>
            <Text>Click</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});