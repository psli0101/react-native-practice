import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Content, Button } from 'native-base';

export default class Edit extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.all}>
        <Text style={styles.time}>2019.07.08  Mon.  15:00</Text>
        <Text style={styles.txt}>My First To-do Item!!!</Text>
        <Button bordered style={styles.bt}>
          <Text style={{ fontSize: 18.75, }}>Done</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all: {
    paddingBottom: 15,
    paddingLeft: 20,
    borderColor: '#707070',
    borderBottomWidth: 0.5,
  },
  bt: {
    width: 90,
    height: 35, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#707070',
    marginTop: 15,
  },
  time: {
    color: '#676767',
    fontSize: 18.75,
    marginTop: 20,
  },
  txt: {
    color: '#676767',
    fontSize: 25,
    marginTop: 5,
    marginLeft: 30,
  }
});
