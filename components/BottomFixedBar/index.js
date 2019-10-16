import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BottomFixedBar extends Component {

  render() {
    return (
      <Appbar style={appBarStyles.bottomFixed}>
        {/* <Icon name="wb-sunny" size={25} color="#ffffff" style={{marginLeft: 7}} /> */}
        <Text style={appBarStyles.titleStyle}>예약 버튼, 취소 버튼 등을 배치</Text>
        {/* <Appbar.Action style={appBarStyles.iconsStyle} icon="home" onPress={() => console.log('Pressed archive')} />
        <Appbar.Action style={appBarStyles.iconsStyle} icon="archive" onPress={() => console.log('Pressed archive')} />
        <Appbar.Action style={appBarStyles.iconsStyle} icon="star" onPress={() => console.log('Pressed mail')} />*/}
      </Appbar>
    );
  }
}

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