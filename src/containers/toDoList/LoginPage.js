import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native';
import { Button, Row } from 'native-base';

export default class LoginPage extends Component {
  static navigationOptions = {
    header: null
  }

  constructor() {
    super();
    this.state = {
      user_id: '',
      user_pw: ''
    }
  }

  clearText = () => {
    this.setState({
      user_id: '',
      user_pw: ''
    })
  }

  login = () => {
    this.props.navigation.navigate('List');
  }

  signUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.all}>
        <View style={{ flex: 2, justifyContent: 'flex-end' }}>
          <Text style={[styles.title, {fontSize: 30}]}>Hi there :)</Text>
          <Text style={[styles.title, {fontSize: 40}]}>TO DO LIST</Text>
        </View>
        <View style={{ flex: 3, paddingTop: 15, }}>
          <TextInput
            style={styles.userId}
            placeholder='ID'
            onChangeText={(user_id) => this.setState({user_id})}
            underlineColorAndroid='#000'
            value={this.state.user_id}
          />
          <TextInput
            style={styles.password}
            placeholder='Password'
            onChangeText={(user_pw) => this.setState({user_pw})}
            underlineColorAndroid='#000'
            value={this.state.user_pw}
          />
          <View style={styles.btView}>
            <Button
              style={styles.bt}
              onPress={this.clearText}
            >
              <Text style={{ fontSize: 20, }}>Cancel</Text>
            </Button>
            <Button
              style={styles.bt}
              onPress={this.login}
            >
              <Text style={{ fontSize: 20, }}>Login</Text>
            </Button>
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'row', }}>
          <Text style={styles.btSign}>New here?  </Text>
          <Text onPress={this.signUp} style={[styles.btSign, { textDecorationLine: 'underline' }]}>Sign up</Text>
        </View>
      </View>
    );
  }
}

const WIDTH = 200;

const styles = StyleSheet.create({
  all: {
    alignItems: 'center',
    height: Dimensions.get('screen').height,
    backgroundColor: '#81E297',
  },
  title:{
    color: '#008000',
  },
  btView: {
    flexDirection: 'row',
    flex: 1,
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
    color: '#D6FFE0',
    fontSize: 20,
    fontWeight: '600',
  },
  userId: {
    color: '#000000',
    width: WIDTH,
    fontSize: 30,
  },
  password: {
    color: '#000000',
    width: WIDTH,
    fontSize: 30,
  },
});

