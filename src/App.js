import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import { AppNavigator } from '@src/router/router';
import store from './redux/store';

import { pushNotifications } from '@services';

pushNotifications.configure();

const Route = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route/>
      </Provider>
    );
  }
}
