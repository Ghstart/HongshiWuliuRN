import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  NavigatorIOS
} from 'react-native';

import Nav from './common/navigator'


import Util from './../helpers/Util'

class goods_views extends Component {
  constructor() {
    super()

    var datas = []
    for(var i = 0; i < 100; i++) {
      datas.push(
        'row' + i
      );
    }

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(datas),
   };

  }

  render() {
    return (
      <ListView
       style = {styles.listViewContainer}
       dataSource={this.state.dataSource}
       renderRow={(rowData) => <Text>{rowData}</Text>}
     />
    );
  }

  componentDidMount() {

  }
}

class goods extends Component {
  render() {
    return(
      <NavigatorIOS
          initialRoute={{
          component: goods_views,
          title: "货源",
          titleTextColor: '#fff',
          barTintColor: '#e23f42',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  listViewContainer: {
    marginTop: -20
  }
});

module.exports = goods
