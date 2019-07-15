import { createStackNavigator } from 'react-navigation';

import Test from '@containers/Example';
import LoginPage from '@containers/toDoList/LoginPage';
import SignUpPage from '@containers/toDoList/SignUpPage';
import ListPage from '@containers/toDoList/ListPage';
import CreatePage from '@containers/toDoList/CreatePage';

export const AppNavigator = createStackNavigator({
  /* Test: {
    screen: Test,
  }, */
  /* Login: {
    screen: LoginPage,
  },
  SignUp: {
    screen: SignUpPage,
  }, */
  List: {
    screen: ListPage,
  },
  Create: {
    screen: CreatePage,
  }
});
