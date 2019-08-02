import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import Item from '@components/toDoList/ListItem';

import sample_list from '@src/data/sample_list.json';

class List extends Component {
  constructor() {
    super();
    this.state = {
      refreshing: false,
      list: []
    }
  }

  fetchData = () => {
    for (let i = 0; i < sample_list.length; i++) {
      this.state.list.push(
        <Item key={i} data={sample_list[i]}></Item>
      )
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    for (let i = 0; i < sample_list.length; i++) {
      this.state.list.push(
        <Item key={i} data={sample_list[i]}></Item>
      )
    }

    return (
      <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      }
      >
        {this.state.list}
      </ScrollView>
    );
  }
}

export default List;
