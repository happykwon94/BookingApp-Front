import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FixedTopBar from '../../components/FixedTopBar';

export default class MenuSelector extends Component {

  constructor(props){
    super(props);
  }

  renderItem(menu, menuClickEvent) {
    return (
      <View>
        <Card>
          <TouchableOpacity onPress={() => menuClickEvent(menu.Name , menu.Price)}>
            <Card.Title title={menu.Name} subtitle={`${menu.Price}원`} left={(props) => <Avatar.Icon {...props} icon="folder" />} />
          </TouchableOpacity>
        </Card>
        <Divider />
      </View>
    );
  }

  render() {
    const { menus, menuClickEvent } = this.props;

    return (
      <>
        <FlatList renderItem={({ item }) => this.renderItem(item, menuClickEvent)}
                  keyExtractor={item => item}
                  data={menus}
        />
      </>
    );
  }
}
