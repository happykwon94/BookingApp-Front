import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, DataTable } from 'react-native-paper';

import FixedTopBar from '../../components/FixedTopBar';

export default class Reservation extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {

    const { navigation } = this.props;

    return (
      <View>
        <FixedTopBar title={navigation.getParam('selectedItem', null)} />
        <ScrollView>
          <View style={styles.container}>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>예약 항목</DataTable.Title>
                <DataTable.Title>예약 시간</DataTable.Title>
                <DataTable.Title numeric>예약 인원</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell numeric>항목1</DataTable.Cell>
                <DataTable.Cell numeric>12:00 ~ 13:00</DataTable.Cell>
                <DataTable.Cell numeric>6</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell numeric>항목2</DataTable.Cell>
                <DataTable.Cell numeric>16:00 ~ 17:00</DataTable.Cell>
                <DataTable.Cell numeric>3</DataTable.Cell>
              </DataTable.Row>
            </DataTable>

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
