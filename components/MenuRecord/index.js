import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, DataTable, TextInput } from 'react-native-paper';

import FixedTopBar from '../../components/FixedTopBar';

import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MenuSelector from '../../components/MenuSelector';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import Modal from 'react-native-modal';

import TimePicker from "react-native-24h-timepicker";

import NumericInput from 'react-native-numeric-input'


export default class MenuRecord extends Component {

  constructor(props) {

    super(props);

    const { menuName, personCnt, price } = this.props;

    this.state = {
        personCnt: personCnt,
        menuName: menuName,
        price: price
    };

  }

  spinboxChangeEvt(value){
    this.setState({personCnt : value});
  }

  render() {

    const { menuPressed } = this.props;

    return (
      <>
       <DataTable.Row>
         <TouchableOpacity onPress={() => menuPressed()}>
           <DataTable.Cell>{this.state.menuName}</DataTable.Cell>
         </TouchableOpacity>
         <DataTable.Cell></DataTable.Cell>

          <DataTable.Cell>{this.state.personCnt * this.state.price}</DataTable.Cell>

          <NumericInput
             value={this.state.personCnt}
             onChange={value => this.spinboxChangeEvt(value)}
             totalWidth={105}
             totalHeight={45}
             iconSize={25}
             minValue={0}
             maxValue={99}
             step={1}
             valueType='real'
             rounded
             textColor='#000000'
             iconStyle={{ color: 'white' }}
             rightButtonBackgroundColor='#c4c4c4'
             leftButtonBackgroundColor='#c4c4c4'/>

        </DataTable.Row>
      </>

    );
  }
}
