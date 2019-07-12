import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import Header from '@components/toDoList/Header';
import Edit from '@components/toDoList/Edit';
import Item from '@components/toDoList/ListItem';
import Footer from '@components/toDoList/Footer';

export default class ListPage extends Component {
  static navigationOptions = {
    header: null
  }

  constructor() {
    super();
  }

  removeDoneItem = () => {
    alert('Clear');
  }

  render() {
    return (
      <Container>
        <Header name='To Do List'></Header>
        <Edit name='ADD'></Edit>
        <Content>
          <Item></Item>
        </Content>
        <Footer name='Clear' onClick={this.removeDoneItem}></Footer>
      </Container>
    );
  }
}

