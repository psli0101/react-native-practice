import React, { Component } from 'react';
import { Content } from 'native-base';

import Header from '@components/toDoList/Header';
import Search from '@components/toDoList/Search';

export default class ToDoList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Content>
        <Header name='To Do List'></Header>
        <Search></Search>
      </Content>
    );
  }
}

