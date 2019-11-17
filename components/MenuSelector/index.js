import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';

import FixedTopBar from '../../components/FixedTopBar';

import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class MenuSelector extends Component {

// 선택했던 index
// 값의 menuName, price 를 변경해야 함
  renderItem(menu, menuClickEvent) {
    return (
      <View>
        <Card>
          <TouchableOpacity onPress={() => menuClickEvent("dd",1232)}>
            <Card.Title title={menu} subtitle="대표 메뉴들..." left={(props) => <Avatar.Icon {...props} icon="folder" />} />
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
