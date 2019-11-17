import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, Appbar } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

import FixedTopBar from '../../components/FixedTopBar';

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

  // CategorySelector는 DB에서 따로 Data를 fetch하지 않음.
  // 서비스의 분류별로 데이터를 갖고 있게 만든다.
  async componentDidMount() {}

  toReserveQueryPage(){
    this.props.navigation.navigate(
      'ReserveQueryPage',
      {
      }
    );
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
      <>
        <Appbar style={appBarStyles.topFixed}>
          <Text style={appBarStyles.titleStyle}>{"서비스 카테고리 선택"}</Text>
          <TouchableOpacity onPress={() => this.toReserveQueryPage()}>
            <Text style={appBarStyles.serviceQueryBtn}>{"예약 조회"}</Text>
          </TouchableOpacity>
        </Appbar>
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
      </>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 60,
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

const appBarStyles = StyleSheet.create({
  topFixed: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#cfcfcf',
  },

  titleStyle: {
    marginLeft: 15,
    fontFamily: 'JejuGothic',
    color: '#000000',
    fontSize: 20,
    flex: 1,
  },

  iconsStartStyle: {
    alignSelf: 'flex-start',
  },

  iconsEndStyle: {
    alignSelf: 'flex-end',
  },

  serviceQueryBtn:{
    fontFamily: 'JejuGothic',
    fontSize: 14,
    right: 5,
  }
});
