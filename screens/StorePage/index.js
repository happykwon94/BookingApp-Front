import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FixedTopBar from '../../components/FixedTopBar';
import MenuSelector from '../../components/MenuSelector';

// API URL
const API_STORE_INFO = 'http://10.0.2.2:8080/.../...';

export default class StorePage extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    menuRecordSet: [],

    this.state = {
      info: "상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명상점에 대한 설명",
      menus: [
        { menuName: "메뉴1", price: 10000 },
        { menuName: "메뉴2", price: 5000 }
      ],
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

  toRervationPage() {
    this.props.navigation.navigate(
      'Reservation',
      {
        menus: this.state.menus,
      }
    );
  };

  onPressItem(item) {

  }

  render() {
    const { navigation } = this.props;

    return (
      <>
        <FixedTopBar title={navigation.getParam('store', null)} iconStr="" />

        <ScrollView style={styles.container}>
          <Card>
            <Card.Content>
              <Title>Store Information</Title>
              <Paragraph>{this.state.info}</Paragraph>
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

});
