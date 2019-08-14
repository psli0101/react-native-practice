import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import { AppNavigator } from '@src/router/router';

import { pushNotifications } from '@services';

import configureStore from '@redux/store';

pushNotifications.configure();

const Route = createAppContainer(AppNavigator);

// const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <Route />
      </Provider>
    );
  }
}
