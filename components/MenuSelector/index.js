import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';

import FixedTopBar from '../../components/FixedTopBar';

import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class MenuSelector extends Component {

  constructor(props){
    super(props);

    const { menus } = this.props;

    this.state = {
        menus: menus,
    };
  }

  renderItem(menu, menuClickEvent) {
    return (
      <View>
        <Card>
          <TouchableOpacity onPress={() => menuClickEvent(menu.menuName , menu.price)}>
            <Card.Title title={menu.menuName} subtitle="대표 메뉴들..." left={(props) => <Avatar.Icon {...props} icon="folder" />} />
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
                  data={this.state.menus}
        />
      </>
    );
  }
}
