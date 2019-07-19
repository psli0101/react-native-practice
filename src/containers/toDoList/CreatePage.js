import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { Button } from 'native-base';
import { pushNotifications } from '@services';

export default class CreatePage extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      photo: null,
    }
  }

  countTime = (num, digital) => {
    var x = ''
    for (var i = 0; i < digital; i++) {
      x += '0'
    }
    return (x + num).slice(-digital)
  }

  getTime = () => {
    var WeekList = ['Sun.', 'Mon.', 'Tus.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    var cd = new Date();
    var date = this.countTime(cd.getDate(), 2);
    var month = this.countTime(cd.getMonth() + 1, 2);
    var year = cd.getFullYear();
    var week = WeekList[cd.getDay()];
    var hours = this.countTime(cd.getHours(), 2);
    var min = this.countTime(cd.getMinutes(), 2);
    var sec = this.countTime(cd.getSeconds(), 2);
    var time = year + '.' + month + '.' + date + '  ' + week + '  ' + hours + ':' + min + ':' + sec;
    return time;
  }

  choosePhoto = () => {
  }

  addNew = () => {
    pushNotifications.localNotification('Create successful');
    this.props.navigation.navigate('List');
  }

  render() {
    return (
      <View style={styles.all}>
        <TextInput
          style={styles.txt}
          placeholder='Message'
          onChangeText={(message) => this.setState({message})}
          underlineColorAndroid='#000'
          value=''
        />
        <View style={styles.btView}>
          <Button
            style={styles.bt}
            onPress={this.cancel}
          >
            <Text style={{ fontSize: 20, }}>Cancel</Text>
          </Button>
          <Button
            style={styles.bt}
            onPress={this.addNew}
          >
            <Text style={{ fontSize: 20, }}>Create</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const WIDTH = 300;

const styles = StyleSheet.create({
  all: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    backgroundColor: '#81E297',
  },
  btView: {
    flexDirection: 'row',
    width: WIDTH,
  },
  bt: {
    height: 35, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#000',
    backgroundColor: '#FFF',
    flex: 1,
    margin: 5,
    marginTop: 15,
  },
  btSign: {
    color: 'blue',
  },
  txt: {
    color: '#000000',
    width: WIDTH,
    fontSize: 25,
    fontWeight: '100',
  },
});
