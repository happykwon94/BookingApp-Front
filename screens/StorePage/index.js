import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, Appbar, ActivityIndicator, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FixedTopBar from '../../components/FixedTopBar';
import MenuSelector from '../../components/MenuSelector';

// API URL
const BACKEND_URL = 'http://bookingapp.ga:3000';

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

      Image: '',
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
        Image: storeInfo.Image
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
        <ActivityIndicator style={styles.ActivityIndicatorStyle}
                           animating={true}
                           color={Colors.blue200} />
      )
    }

    const { navigation } = this.props;
    const imageComponent = [];

    if (typeof this.state.Image != "undefined"){
      const imageBinaryData = this.state.Image.File;
      imageComponent.push(<Card.Cover source={{uri: `data:image/gif;base64,${imageBinaryData}`}} />);
    }

    return (
      <>
        <FixedTopBar title={navigation.getParam('store', null)} iconStr="" />

        <ScrollView style={styles.container}>
    {/* 버전 1, 작은 이미지 , 설명, 설명
          <Card>
            <Card.Content style={cardcontent.introduceStore}>
                <Image style={content.introduceStoreImage} source={require('./StoreMenu/test.png')}></Image>
                <Divider style={content.layout,[{borderBottomWidth:1, borderBottomColor: '#EAEAEA'}]}>
                  <Title style={content.introduceStoreTitle}>Store Information</Title>
                  <Paragraph style={content.introduceStoreParagraph}>{this.state.WorkPlaceID}</Paragraph>
                </Divider>
            </Card.Content>
          </Card>
    */}

    {/* 버전 2, 큰 이미지 , 밑에 설명*/}
          <Card>
            <Card.Content style={cardcontent.introduceStore}>
                {imageComponent}{/* imageComponent에 style={content.introduceStoreImage} 스타일 태그 속성 부여 */}
                {/*<Image style={content.introduceStoreImage} source={require('./StoreMenu/test.png')}></Image>*/}
                <Divider style={content.layout,[{borderBottomWidth:1, borderBottomColor: '#EAEAEA'}]}>
                  <Title style={content.introduceStoreTitle}>Store Information</Title>
                  <Paragraph style={content.introduceStoreParagraph}>{this.state.WorkPlaceInfo}</Paragraph>
                </Divider>
            </Card.Content>
          </Card>


          <Divider style={[{borderBottomColor: 'black', borderBottomWidth: 1}]}/>
          <MenuSelector menus={this.state.menus}
                        menuClickEvent={() => console.log("dd")}/>
        </ScrollView>

        <TouchableOpacity onPress={() => this.toRervationPage()}>
          <View style={appBarStyles.bottomFixed}>
            <View style={[{flex:1}]}></View>
            <Text style={appBarStyles.text}>예약하기</Text>
            <View style={[{flex:1}]}></View>
          </View>
        </TouchableOpacity>
      </>
    );
  }
}

/* 버전 1 Style
const cardcontent = StyleSheet.create({
  introduceStore: {
    flexDirection: 'row',
    height: 125,
    backgroundColor: '#EAEAEA',
    //or #DEF7DE
  },
});

const content = StyleSheet.create({
  layout:{
    flexDirection: 'column',
  },

  introduceStoreImage: {
    height: 100,
    width: 100,
  },

  introduceStoreTitle:{
    fontFamily: 'BMJUA_ttf',
    marginTop: 10,
    marginLeft: 25,
    fontSize: 30,
  },

  introduceStoreParagraph: {
    fontFamily: 'BMJUA_ttf',
    marginLeft: 76,
    marginTop: 10,
    fontSize: 20,
  },
});
*/

const cardcontent = StyleSheet.create({
  introduceStore: {
    flexDirection: 'column',
    height: 310,
    backgroundColor: '#EAEAEA',
    //or #DEF7DE
  },
});

const content = StyleSheet.create({
  layout:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  introduceStoreImage: {
    height: 200,
    width: 200,
    marginLeft: '25%',
    justifyContent: 'space-between',
    resizeMode: 'contain',
  },

  introduceStoreTitle:{
    fontFamily: 'BMJUA_ttf',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 30,
    alignItems: 'center',
  },

  introduceStoreParagraph: {
    fontFamily: 'BMJUA_ttf',
    marginLeft: 15,
    marginTop: 10,
    fontSize: 20,
  },
});

const appBarStyles = StyleSheet.create({

  bottomFixed: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: '#3cb371',
    flexDirection: 'column',
  },

  text:{
    fontFamily: 'BMJUA_ttf',
    color: '#EAEAEA',
    fontSize: 40,
    textAlign: 'center',
  },

});


const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'white',
  },

  ActivityIndicatorStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
