import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Content, Button } from 'native-base';

export default class Edit extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', paddingLeft: 20, }}>
        <TextInput
          style={styles.input}
          placeholder="Input Word"
          onChangeText={(text) => this.setState({text})}
        />
        <View style={{ paddingTop: 25, flex: 1 }}>
          <Button small bordered style={styles.bt}>
            <Text>Add</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bt: {
    width: 80,
    height: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    height: 80,
    fontSize: 30,
    flex: 3,
  }
});
