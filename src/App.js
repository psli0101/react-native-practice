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
import { createAppContainer } from 'react-navigation';

import { AppNavigator } from '@src/router/router';

import ToDoList from '@containers/toDoList/ListPage';
import Test from '@containers/toDoList/LoginPage';

const Route = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Route/>
    );
  }
}
