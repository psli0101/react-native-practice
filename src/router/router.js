import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginPage from '@containers/toDoList/LoginPage';
import SignUpPage from '@containers/toDoList/SignUpPage';
import ListPage from '@containers/toDoList/ListPage';

export const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginPage,
    },
    SignUp: {
        screen: SignUpPage,
    },
    List: {
        screen: ListPage,
    },
});
