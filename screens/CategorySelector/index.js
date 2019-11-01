import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import FixedTopBar from '../../components/FixedTopBar';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

// API URL
const API_CATEGORIES = 'http://10.0.2.2:8080/.../...';

export default class CategorySelector extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
        categories: [
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
          { name: 'Dummy', color: '#1abc9c' }, { name: 'Dummy', color: '#2ecc71' },
      ]
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
      'StoreSelector',
      {
        category: item
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatGrid
          itemDimension={100}
          items={this.state.categories}
          style={gridStyles.gridView}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => this.onPressItem(item.name)}>
              <View style={[gridStyles.itemContainer, { backgroundColor: item.color }]}>
                <Text style={itemStyles.itemName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
  text: {
    fontFamily: 'JejuGothic',
    marginBottom: 10,
    fontSize: 16,
  },
  cardContainer:{
    backgroundColor: '#f5f5f5',
  },
  cityTitle: {
    fontSize: 35,
  },
  ActivityIndicatorStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const gridStyles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
});

const itemStyles = StyleSheet.create({
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
