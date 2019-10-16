import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, DataTable } from 'react-native-paper';

import FixedTopBar from '../../components/FixedTopBar';

// API URL
const API_POS_DATA = 'http://10.0.2.2:8080/.../...';

export default class Reservation extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {

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

    const { navigation } = this.props;

    return (
      <View>
        <FixedTopBar title={navigation.getParam('selectedItem', null)} />
        <ScrollView>
          <View style={styles.container}>


            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
              OK
            </Button>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
              Cancel
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// flex1이 아이콘들을 오른쪽에 붙게함
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
