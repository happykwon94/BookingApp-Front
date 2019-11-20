import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FixedTopBar from '../../components/FixedTopBar';

export default class MenuSelector extends Component {

  constructor(props){
    super(props);
  }

  // menu.Image.File
  renderItem(menu, menuClickEvent) {

    let imageBinaryData = "";

    if (typeof menu.Image != "undefined"){
      imageBinaryData = menu.Image.File;
    }

    return (
      <View>
        <Card>
          <TouchableOpacity onPress={() => menuClickEvent(menu.Name , menu.Price)}>
            <Card.Title style={cardtitle.card}
                        title={menu.Name}
                        titleStyle={cardtitle.title}
                        subtitle={`${menu.Price} 원`}
                        subtitleStyle={cardtitle.subtitle}
                        left={(props) => typeof menu.Image == "undefined" ?
                          <Image style={image.imageStyle} source={require('./default_Image/default_image.png')} /> :
                          <Image Image style={image.imageStyle} source={{uri: `data:image/gif;base64,${imageBinaryData}`}} />}
                        />
          </TouchableOpacity>
        </Card>
        <Divider />
      </View>
    );
  }

  render() {
    const { menus, menuClickEvent } = this.props;

    return (
      <>
        <FlatList renderItem={({ item }) => this.renderItem(item, menuClickEvent)}
                  keyExtractor={item => item}
                  data={menus}
        />
      </>
    );
  }
}

const cardtitle = new StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  title: {
    marginLeft: 50,
    fontSize: 25,
    fontFamily: 'BMJUA_ttf',
  },

  subtitle:{
    marginLeft: 60,
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'BMJUA_ttf',
  }
});

const image = new StyleSheet.create({
  imageStyle: {
    height: 85,
    width: 85,
  }
});
