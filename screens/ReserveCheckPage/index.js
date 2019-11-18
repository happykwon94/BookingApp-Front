import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, Appbar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'react-native-axios'

import FixedTopBar from '../../components/FixedTopBar';

// API URL
const BACKEND_URL = 'http://10.0.2.2:8080/.../...';

export default class ReserveCheckPage extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
      reservationID: navigation.getParam('reservationID', 'Unknown'),
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      reservationID: this.props.navigation.getParam('reservationID', null),

      Address: '',
      WorkPlaceInfo: '',
      ReservedDateTime: '',
      EndDateTime: '',
      Menus: []
    };
  }

  async componentDidMount() {
    fetch(BACKEND_URL + '/reservation/lookup/' + this.state.reservationID)
    .then(response => response.json())
    .then(reservation => {
      this.setState({
        Address: reservation.Address,
        WorkPlaceInfo: reservation.WorkPlaceInfo,
        ReservedDateTime: reservation.ReservedDateTime,
        EndDateTime: reservation.EndDateTime,
        Menus: reservation.Menus
      });
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <>
        <FixedTopBar title={"예약 내역 확인 및 변경"} iconStr="" />
        <View style={styles.container}>

        </View>
      </>
    );
  }
}

// flex1이 아이콘들을 오른쪽에 붙게함
const styles = StyleSheet.create({

  textInput: {
    marginBottom: 30,
    backgroundColor: '#ffffff'
  },

  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
  },

});
