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
      name: '',
      email: '',
      id: '',
      pw: '',
      c_pw: '',
    }
  }

  cancel = () => {
    this.props.navigation.navigate('Login');
  }

  signUp = () => {
    this.props.navigation.navigate('List');
  }

  render() {
    return (
      <View style={styles.all}>
        <TextInput
          style={styles.txt}
          placeholder='Name'
          onChangeText={(name) => this.setState({name})}
          underlineColorAndroid='#000'
          value={this.state.name}
        />
        <TextInput
          style={styles.txt}
          placeholder='E-mail'
          onChangeText={(email) => this.setState({email})}
          underlineColorAndroid='#000'
          value={this.state.email}
        />
        <TextInput
          style={styles.txt}
          placeholder='ID'
          onChangeText={(id) => this.setState({id})}
          underlineColorAndroid='#000'
          value={this.state.id}
        />
        <TextInput
          style={styles.txt}
          placeholder='Enter Password'
          onChangeText={(pw) => this.setState({pw})}
          underlineColorAndroid='#000'
          value={this.state.pw}
        />
        <TextInput
          style={styles.txt}
          placeholder='Confirm Password'
          onChangeText={(c_pw) => this.setState({c_pw})}
          underlineColorAndroid='#000'
          value={this.state.c_pw}
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
            onPress={this.signUp}
          >
            <Text style={{ fontSize: 20, }}>Sign up</Text>
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

