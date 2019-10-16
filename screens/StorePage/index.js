import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';

import FixedTopBar from '../../components/FixedTopBar';
import BottomFixedBar from '../../components/BottomFixedBar';

// API URL
const API_STORE_INFO = 'http://10.0.2.2:8080/.../...';

export default class StorePage extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      info: "상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명",
      menus: ["메뉴1", "메뉴2", "메뉴3", "메뉴4", "메뉴5", "메뉴6"],
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

  onPressItem(item) {
    this.props.navigation.navigate(
      'Reservation',
      {
        selectedItem: item
      }
    );
  }

  renderItem(menu) {
    return (
      <View>
        <Card>
          <TouchableOpacity onPress={() => this.onPressItem(menu)}>
            <Card.Title title={menu} subtitle="대표 메뉴들..." left={(props) => <Avatar.Icon {...props} icon="folder" />} />
          </TouchableOpacity>
        </Card>
        <Divider />
      </View>
    );
  }

  render() {

    const { navigation } = this.props;

    return (
      <View>
        <FixedTopBar title={navigation.getParam('store', null)} />
        <ScrollView>
        <View style={styles.container}>
          <View>

          <Card>
            <Card.Content>
              <Title>Store Information</Title>
              <Paragraph>{this.state.info}</Paragraph>
            </Card.Content>
          </Card>

          <Divider />

          <FlatList renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item}
                    data={this.state.menus}
          />

          </View>
        </View>
        </ScrollView>
        <BottomFixedBar />
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
