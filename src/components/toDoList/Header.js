import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.title}>
        <Text style={{ fontSize: 24, color: '#676767'}}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#81E297',
  }
});
