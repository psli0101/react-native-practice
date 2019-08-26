import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Test from '@containers/Example';
import LoginPage from '@containers/toDoList/LoginPage';
import SignUpPage from '@containers/toDoList/SignUpPage';
import ListPage from '@containers/toDoList/ListPage';
import CreatePage from '@containers/toDoList/CreatePage';

export const AppNavigator = createStackNavigator({
  Test: {
    screen: Test,
  }, /* 
  Login: {
    screen: LoginPage,
  },
  SignUp: {
    screen: SignUpPage,
  },
  List: {
    screen: ListPage,
  },
  Create: {
    screen: CreatePage,
  } */
});

export const TabNavigator = createMaterialBottomTabNavigator(
  {
    Login: {
      screen: LoginPage,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>)
      }
    },
    SignUp: {
      screen: SignUpPage,
      navigationOptions: {
        tabBarLabel: 'SignUp',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
          </View>),
      }
    },
    List: {
      screen: ListPage,
      navigationOptions: {
        tabBarLabel: 'List',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-images'} />
          </View>),
      }
    },
    Create: {
      screen: CreatePage,
      navigationOptions: {
        tabBarLabel: 'Create',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-cart'} />
          </View>),
      }
    },
    Favorite: {
      screen: ListPage,
      navigationOptions: {
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'md-heart'} />
          </View>),
      }
    }
  },
  {
    initialRouteName: "Login",
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' },
  },
);

