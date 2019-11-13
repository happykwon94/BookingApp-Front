import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, DataTable, TextInput } from 'react-native-paper';

import FixedTopBar from '../../components/FixedTopBar';

import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import Modal from 'react-native-modal';

// API URL
const API_POS_DATA = 'http://10.0.2.2:8080/.../...';

export default class Reservation extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      name : "",
      phoneNum: "",
      visibleCandedarModal: null,
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

  calendarModalRender = () => (
    <>
      <Calendar
        current={'2012-03-01'}
        minDate={'2012-01-10'}
        maxDate={'2012-05-30'}
        onDayPress={(day) => {console.log('selected day', day)}}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {console.log('month changed', month)}}
        hideExtraDays={true}
        disableMonthChange={false}
        firstDay={1}
        hideDayNames={true}
        showWeekNumbers={true}
        onPressArrowLeft={substractMonth => substractMonth()}
        onPressArrowRight={addMonth => addMonth()}
      />
    </>
  );

  render() {

    const { navigation } = this.props;

    return (
      <>
        <Appbar style={appBarStyles.topFixed}>
          <Text style={appBarStyles.titleStyle}>{"예약"}</Text>
          <Appbar.Action icon="add" onPress={() => console.log("Pressed archive")} />
        </Appbar>

        <View style={styles.container}>
          <ScrollView>
              <TextInput
                label='성함'
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
                style={styles.textInput}
                placeholder='성함을 입력해주세요'
              />

              <TextInput
                label='핸드폰 번호'
                value={this.state.phoneNum}
                onChangeText={phoneNum => this.setState({ phoneNum })}
                style={styles.textInput}
                placeholder='핸드폰 번호를 입력해주세요'
              />

              <Modal
                isVisible={this.state.visibleModal === 2}
                backdropColor={'white'}
                backdropOpacity={1}
                animationIn={'zoomInDown'}
                animationOut={'zoomOutUp'}
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={1000}
              >
                {this.calendarModalRender()}
              </Modal>

              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>예약 시간</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <TouchableOpacity onPress={() => this.setState({ visibleModal: 2 })}>
                    <DataTable.Cell>12:00 ~ 13:00</DataTable.Cell>
                  </TouchableOpacity>
                </DataTable.Row>
              </DataTable>

              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>예약 항목</DataTable.Title>
                  <DataTable.Title>예약 인원</DataTable.Title>
                  <DataTable.Title>가격</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>항목1</DataTable.Cell>
                  <DataTable.Cell>6</DataTable.Cell>
                  <DataTable.Cell>1000</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>항목2</DataTable.Cell>
                  <DataTable.Cell>3</DataTable.Cell>
                  <DataTable.Cell>3000</DataTable.Cell>
                </DataTable.Row>
              </DataTable>

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
    backgroundColor: '#ffffff',
  },

  text: {
    fontFamily: 'JejuGothic',
    marginBottom: 10,
    fontSize: 16,
  },

  cardContainer: {
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
  },

  textInput: {
    backgroundColor: '#ffffff'

  },

});

const appBarStyles = StyleSheet.create({

  topFixed: {
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#cfcfcf',
  },

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
  },

});
