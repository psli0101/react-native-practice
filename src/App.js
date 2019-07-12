import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';

import { AppNavigator } from '@src/router/router';

const Route = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Route/>
    );
  }
}
