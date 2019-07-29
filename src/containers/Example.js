import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { pushNotifications } from '@services';
import ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';

import { connect } from 'react-redux';
import { getList } from '@redux/actions';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class Example extends Component {
  constructor(props) {
    super(props);
  }

  /* componentDidMount() {
    this.props.getList();
  } */

  handleOnPress = () => {
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
      message: "1234567",
      playSound: true,
      soundName: 'default',
      actions: '["Accept", "Reject"]',
    };
    pushNotifications.localNotification(message);
  };

  takePicture = async () => {
    try {
      const cameraData = await this.camera.takePictureAsync()
    } catch (e) {
      // This logs the error
      alert(e)
    }
  };

  pickPhoto = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  fileSys = () => {
    RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((result) => {
        console.log('GOT RESULT', result);

        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then((statResult) => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          alert(RNFS.readFile(statResult[1], 'utf8'));
        }

        return 'no file';
      })
      .then((contents) => {
        // log the file contents
        alert(contents);
      })
      .catch((err) => {
        alert(err.message, err.code);
      });
  }

  render() {
    const {
      list,
      listLoaded,
      listError
    } = this.props;

    return (
      <View style={styles.container}>
        <Button onPress={this.handleOnPress}>
          <Text>Click</Text>
        </Button>
        <Button onPress={this.pickPhoto}>
          <Text>Picker</Text>
        </Button>
        <Button onPress={this.fileSys}>
          <Text>Picker</Text>
        </Button>
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
/* 
const mapStateToProps = ({ state }) => {
  const {
    getList: {
      list,
      loading: listLoaded,
      error: listError
    }
  } = state;
  return {
    list,
    listLoaded,
    listError,
  };
}; */

/* export default connect(
  mapStateToProps,
  {
    getList,
  }
)(Example)
 */

export default Example;
