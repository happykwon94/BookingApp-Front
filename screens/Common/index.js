import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FixedTopBar from '../../components/FixedTopBar';

export default class SingleScreen extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <FixedTopBar title="기본 화면"></FixedTopBar>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
