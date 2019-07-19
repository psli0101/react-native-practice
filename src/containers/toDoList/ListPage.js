import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import Header from '@components/toDoList/Header';
import Edit from '@components/toDoList/Edit';
import Item from '@components/toDoList/ListItem';
import Footer from '@components/toDoList/Footer';

import sample_list from '@src/data/sample_list.json';

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

  createNewItem = () => {
    this.props.navigation.navigate('Create');
  }

  render() {
    const list = [];
    for (let i = 0; i < sample_list.length; i++) {
      list.push(
        <Item key={i} data={sample_list[i]}></Item>
      )
    }

    return (
      <Container>
        <Header name='To Do List'></Header>
        <Edit name='ADD' onClick={this.createNewItem}></Edit>
        <Content>
          {list}
        </Content>
        <Footer name='Clear' onClick={this.removeDoneItem}></Footer>
      </Container>
    );
  }
}

