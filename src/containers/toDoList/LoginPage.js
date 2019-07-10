import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native';
import { Button } from 'native-base';

export default class LoginPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.all}>
        <TextInput
          style={styles.userId}
          placeholder='ID'
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid='#000'
        />
        <TextInput
          style={styles.password}
          placeholder='Password'
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid='#000'
        />
        <View style={styles.btView}>
          <Button style={styles.bt}>
            <Text style={{ fontSize: 20, }}>Cancel</Text>
          </Button>
          <Button style={styles.bt}>
            <Text style={{ fontSize: 20, }}>Login</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const WIDTH = 200;

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
  userId: {
    color: 'black',
    width: WIDTH,
    fontSize: 30,
  },
  password: {
    color: 'black',
    width: WIDTH,
    fontSize: 30,
  },
});

