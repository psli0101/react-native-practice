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
        <TextInput
          style={styles.input}
          placeholder=''
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid='#D3D3D3'
        />
        <View style={{ marginTop: 25, marginLeft: 15, flex: 1 }}>
          <Button bordered style={styles.bt}>
            <Text style={{ fontSize: 20, }}>ADD</Text>
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
