import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export default class CardExample extends Component {
  render() {
    return (
      <Card  style={{ width:100, }}>
        <CardItem>
          <Text>
            1
          </Text>
        </CardItem>
        <CardItem>
          <Text>
            2
          </Text>
        </CardItem>
        <CardItem>
          <Text>
            3
          </Text>
        </CardItem>
      </Card>
    );
  }
}
