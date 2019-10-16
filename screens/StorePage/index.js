import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import FixedTopBar from '../../components/FixedTopBar';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';

// API URL
const API_STORE_INFO = 'http://10.0.2.2:8080/.../...';

export default class StorePage extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      title: "상점1",
      info: "상점에 대한 설명",
      menus: ["메뉴1", "메뉴2", "메뉴3", "메뉴4"],
    };
  }

  async componentDidMount() {
    // fetch(API_CATEGORIES)
    // .then(response => response.json())
    // .then(categories => {
    //   // console.log('cities =', cities.length);
    //   this.setState({
    //     categories
    //   });
    // });
  }

  render() {
    return (
      <View>
        <FixedTopBar />
        <ScrollView>
          <FlatList style={styles.container}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item}
                    data={this.state.stores}
          />
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#ffffff',
  },
});
