import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FixedTopBar extends Component {

  render() {
    const { title, iconStr } = this.props;

    return (
      <Appbar style={appBarStyles.topFixed}>
        {iconStr !== "" ? <Icon name={iconStr} size={25} color="#ffffff" style={{marginLeft: 7}} />: <Icon />}
        <Text style={appBarStyles.titleStyle}>{title}</Text>

      </Appbar>
    );
  }
}

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
  }
});
