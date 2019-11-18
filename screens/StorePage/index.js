import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, Appbar, ActivityIndicator, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FixedTopBar from '../../components/FixedTopBar';
import MenuSelector from '../../components/MenuSelector';

// API URL
const BACKEND_URL = 'http://c00bfdae.ngrok.io';

export default class StorePage extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {

      isLoading: true,

      SelfEmployedID: '',
      Address: '',
      WorkPlaceID: '',
      Name: '',
      Category: '',
      WorkPlaceInfo: '',

      // 받아오는 API가 다름
      menus: [],
    };
  }

  async componentDidMount() {

    fetch(BACKEND_URL + '/menu/' + this.props.navigation.getParam('workPlaceID', null))
    .then(response => response.json())
    .then(menus => {
      this.setState({
        menus: menus
      });
    });

    fetch(BACKEND_URL + '/store/' + this.props.navigation.getParam('workPlaceID', null))
    .then(response => response.json())
    .then(storeInfo => {
      this.setState({
        SelfEmployedID: storeInfo.SelfEmployedID,
        Address: storeInfo.Address,
        WorkPlaceID: storeInfo.WorkPlaceID,
        Name: storeInfo.Name,
        Category: storeInfo.Category,
        WorkPlaceInfo: storeInfo.WorkPlaceInfo,
      });
    });

    this.setState({ isLoading: false });
  }

  toRervationPage() {

    this.props.navigation.navigate(
      'Reservation',
      {
        menus: this.state.menus,
        workPlaceID: this.props.navigation.getParam('workPlaceID', null)
      }
    );
  };

  onPressItem(item) {

  }

  render() {

    if (this.state.isLoading) {
      return (
        <ActivityIndicator style={styles.ActivityIndicatorStyle} animating={true} color={Colors.blue200} />
      )
    }

    const { navigation } = this.props;

    return (
      <>
        <FixedTopBar title={navigation.getParam('store', null)} iconStr="" />

        <ScrollView style={styles.container}>
          <Card>
            <Card.Content>
              <Title>Store Information</Title>
              <Paragraph>{this.state.WorkPlaceID}</Paragraph>
            </Card.Content>
          </Card>

          <Divider />
          <MenuSelector menus={this.state.menus}
                        menuClickEvent={() => console.log("dd")}/>
        </ScrollView>

        <Appbar style={appBarStyles.bottomFixed}>
          {/* <Icon name="wb-sunny" size={25} color="#ffffff" style={{marginLeft: 7}} /> */}
          <Appbar.Action style={appBarStyles.iconsStyle} icon="arrow-forward" onPress={() => this.toRervationPage()} />
        </Appbar>
      </>
    );
  }
}

const appBarStyles = StyleSheet.create({

  bottomFixed: {
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


const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 50,
    // marginBottom은 BottomFixedAppbar의 높이가 되게 넣을 것

    // marginBottom은 BottomFixedAppbar의 높이가 되게 넣을 것
    backgroundColor: '#ffffff',
  },

  ActivityIndicatorStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
