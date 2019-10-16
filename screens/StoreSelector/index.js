import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import FixedTopBar from '../../components/FixedTopBar';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';

// API URL
const API_STORES = 'http://10.0.2.2:8080/.../...';

export default class StoreSelector extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      stores: ["상점1", "상점2", "상점3"],
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
      'StorePage',
      {
        store: item
      }
    );
  }

  renderItem(store) {
    return (
      <View>
        <Card>
          <TouchableOpacity onPress={() => this.onPressItem(store)}>
            <Card.Title title={store} subtitle="대표 메뉴들..." left={(props) => <Avatar.Icon {...props} icon="folder" />} />
          </TouchableOpacity>
        </Card>
        <Divider />
      </View>
    );
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
