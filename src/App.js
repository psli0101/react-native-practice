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

import Example from '@containers/Example';
import ToDoList from '@containers/toDoList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Content>
        <ToDoList></ToDoList>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
});
