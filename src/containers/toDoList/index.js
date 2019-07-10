import React, { Component } from 'react';
import { Content } from 'native-base';

import Header from '@components/toDoList/Header';
import Edit from '@components/toDoList/Edit';
import Item from '@components/toDoList/ListItem';

export default class ToDoList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Content>
        <Header name='To Do List'></Header>
        <Edit></Edit>
        <Item></Item>
      </Content>
    );
  }
}

