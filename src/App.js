/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View} from 'react-native';
import { Content } from 'native-base';

import Example from './components/Example';
import Sample from './components/Example2';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Content style={styles.container}>
        <Example></Example>
        <View style={{ justifyContent: 'center', alignItems: 'center',}}>
        <Sample></Sample>
        <Sample></Sample>
        <Sample></Sample>
        <Sample></Sample>
        <Sample></Sample>
        <Sample></Sample>
        <Sample></Sample>
        <Sample></Sample>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
