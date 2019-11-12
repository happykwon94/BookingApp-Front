import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, DataTable } from 'react-native-paper';

import FixedTopBar from '../../components/FixedTopBar';

import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <>
      <View>
        <FixedTopBar title={"예약"} />
        <ScrollView>
          <View style={styles.container}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title numeric>성함</DataTable.Title>
                <DataTable.Title numeric>핸드폰 번호</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell numeric>fefe</DataTable.Cell>
                <DataTable.Cell numeric>fefe</DataTable.Cell>
              </DataTable.Row>
            </DataTable>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title numeric>예약 시간</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell numeric>12:00 ~ 13:00</DataTable.Cell>
              </DataTable.Row>
            </DataTable>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title numeric>예약 항목</DataTable.Title>
                <DataTable.Title numeric>예약 인원</DataTable.Title>
                <DataTable.Title numeric>가격</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell numeric>항목1</DataTable.Cell>
                <DataTable.Cell numeric>6</DataTable.Cell>
                <DataTable.Cell numeric>1000</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell numeric>항목2</DataTable.Cell>
                <DataTable.Cell numeric>3</DataTable.Cell>
                <DataTable.Cell numeric>3000</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
        </ScrollView>
      </View>

      <Appbar style={appBarStyles.bottomFixed}>
        <Appbar.Content titleStyle={styles.reserveBtn} title="예약하기" onPress={() => console.log("1")}/>
        <Appbar.Content titleStyle={styles.reserveBtn} title="취소하기" onPress={() => console.log("2")}/>
      </Appbar>
      </>
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
  reserveBtn: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'JejuGothic'
  }

});

const appBarStyles = StyleSheet.create({
  bottomFixed: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
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
  }
});
