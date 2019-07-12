import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Button style={styles.title} onPress={this.props.onClick}>
          <Text style={{ fontSize: 24, color: '#676767'}}>{this.props.name}</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    width: Dimensions.get('window').width,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEFFCD',
    borderColor: '#2A9042',
    borderWidth: 0.5,
  }
});
