import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, Appbar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FixedTopBar from '../../components/FixedTopBar';

// API URL
const BACKEND_URL = 'http://bookingapp.ga:3000';

export default class ReserveQueryPage extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      reservationID: ''
    };
  }

  reserveQuery(){
    this.props.navigation.navigate(
      'ReserveCheckPage',
      {
        reservationID: this.state.reservationID
      }
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <>
        <FixedTopBar title={"예약 조회"} iconStr="" />

        <View style={styles.container}>
          <TextInput label='예약 ID'
                     value={this.state.reservationID}
                     onChangeText={reservationID => this.setState({ reservationID })}
                     style={styles.textInput}
                     placeholder='예약할 때 받았던 ID를 입력해주세요' />
          <Button icon="" mode="contained" onPress={() => this.reserveQuery()}>
            조회
          </Button>
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
