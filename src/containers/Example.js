import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'native-base';
import { RNCamera } from 'react-native-camera';
import { pushNotifications } from '@services';


export default class App extends Component {
  handleOnPress = (uri) => {
    const message = {
      autoCancel: true,
      largeIcon: "ic_launcher",
      smallIcon: "ic_notification",
      bigText: "My big text that will be shown when notification is expanded",
      subText: "This is a subText",
      color: "green",
      vibrate: true,
      vibration: 300,
      title: "MyApp",
      message: uri,
      playSound: true,
      soundName: 'default',
      actions: '["Accept", "Reject"]',
    };
    pushNotifications.localNotification(message);
  };

  takePicture = async() => {
    try {
      const cameraData = await this.camera.takePictureAsync()
      this.handleOnPress(cameraData.uri)
    } catch (e) {
     // This logs the error
      alert(e)
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <Button onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </Button>
          <Button onPress={this.handleOnPress('112345')}>
            <Text>Click Me</Text>
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
