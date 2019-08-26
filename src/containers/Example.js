import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { Button } from 'native-base';
import { pushNotifications } from '@services';
import ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { Calendar } from 'react-native-calendars';
import QRcode from 'react-native-qrcode-svg';

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

  phoneCall = () => {
    Linking.openURL(`tel:**********`);
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
        <Button onPress={this.phoneCall}>
          <Text>Phone Call</Text>
        </Button>
        <Calendar
          // Initially visible month. Default = Date()
          current={'2012-03-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => { console.log('selected day', day) }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => { console.log('selected day', day) }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => { console.log('month changed', month) }}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />
        <QRcode
          value='https://www.npmjs.com/package/react-native-qrcode-svg'
        />
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
