import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native';
import { Button } from 'native-base';

export default class SignUpPage extends Component {
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
    alert('Loading')
  }

  render() {
    return (
      <View style={styles.all}>
        <View style={{ flex: 1, alignItems: 'flex-end'}}>
          <Button transparent onPress={this.signUp}>
            <Text style={styles.btSign}>Sign up</Text>
          </Button>
        </View>
        <View style={{ flex: 2, }}>
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
    color: 'blue',
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

