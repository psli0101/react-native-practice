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
      QR_URL: '',
      start: false,
    }
  }

  openLink = () => {
    Linking.canOpenURL('https://')
    .then(supported => {
      if (!supported) {
        console.log("Can't handle url: " + url);
      } else {
        return Linking.openURL(this.state.QR_URL);
      }
    })
    .catch((err) => console.error('An error occurred', err));
  };

  scannerQRcode = () => {
    Alert.alert(
      'Open?',
      this.state.QR_URL,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: this.openLink},
      ],
      {cancelable: false},
    );
  }

  _onBarCodeRead = (e) => {
    this.setState({
      QR_URL: e.data
    });
    this.scannerQRcode();
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={this._onBarCodeRead.bind(this)}
        >
          {/* <View style={{ backgroundColor: '#ffffff80', height: 300, width: 500, }}></View> */}
        </RNCamera>
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