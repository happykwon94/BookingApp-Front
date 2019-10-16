import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import FixedTopBar from '../../components/FixedTopBar';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';

// API URL
const API_CATEGORIES = 'http://10.0.2.2:8080/.../...';

export default class CategorySelector extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      categories: ["항목1", "항목2", "항목3", "항목4"],
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

  onPressItem(item) {
    this.props.navigation.navigate(
      'StoreSelector',
      {
        category: item
      }
    );
  }

  renderItem(category) {
    return (
      <View>
        <Card>
          <TouchableOpacity onPress={() => this.onPressItem(category)}>
            <Card.Title title={category} subtitle="" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
          </TouchableOpacity>
        </Card>
        <Divider />
      </View>
    );
  }

  render() {
    return (
      <View>
        <FixedTopBar title="기본 화면" />
        <ScrollView>
          <FlatList style={styles.container}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item}
                    data={this.state.categories}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#ffffff',
  },
  text: {
    fontFamily: 'JejuGothic',
    marginBottom: 10,
    fontSize: 16,
  },
  cardContainer:{
    backgroundColor: '#f5f5f5',
  },
  cityTitle: {
    fontSize: 35,
  },
  ActivityIndicatorStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
