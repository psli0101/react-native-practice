import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Content, Button } from 'native-base';

export default class Seach extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Content style={styles.title}>
        <Button small bordered style={styles.bt}>
          <Text>Add</Text>
        </Button>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  bt: {
    width: 80,
    height: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  }
});
