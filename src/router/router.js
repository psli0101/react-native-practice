import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginPage from '@containers/toDoList/LoginPage';
import ListPage from '@containers/toDoList/ListPage';

export const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginPage,
    },
    List: {
        screen: ListPage,
    }
});
