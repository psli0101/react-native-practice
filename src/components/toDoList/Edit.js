import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Content, Button } from 'native-base';

const WeekList = [ 'Sun.', 'Mon.', 'Tus.', 'Wed.', 'Thu.', 'Fri.', 'Sat.' ];

export default class Edit extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
    }
  }

  countTime (num, digital) {
    var x = ''
    for (var i = 0; i < digital; i++) {
      x += '0'
    }
    return (x + num).slice(-digital)
  }

  getTime() {
    var cd = new Date();
    var date = this.countTime(cd.getDate(), 2);
    var month = this.countTime(cd.getMonth() + 1, 2);
    var year = cd.getFullYear();
    var week = WeekList[cd.getDay()];
    var hours = this.countTime(cd.getHours(), 2);
    var min = this.countTime(cd.getMinutes(), 2);
    var time = year + '.' + month + '.' + date + '  ' + week + '  ' + hours + ':' + min;
    return time;
  }

  onClick = () => {
    alert(this.getTime());
    // call API createNewItem
  }

  render() {
    return (
      <View style={styles.all}>
        <TextInput
          style={styles.input}
          placeholder='New To-do'
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid='#D3D3D3'
        />
        <View style={{ marginTop: 25, marginLeft: 15, flex: 1 }}>
          <Button
            bordered style={styles.bt}
            onPress={this.onClick}
          >
            <Text style={{ fontSize: 20, }}>{this.props.name}</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all: {
    flexDirection: 'row',
    paddingBottom: 15,
    paddingLeft: 20,
    borderColor: '#707070',
    borderBottomWidth: 0.5,
  },
  bt: {
    width: 70,
    height: 35, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#707070',
  },
  input: {
    color: 'black',
    height: 80,
    fontSize: 30,
    flex: 3,
  }
});
