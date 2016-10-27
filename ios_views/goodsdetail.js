import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS
} from 'react-native';


class goodsDetail_views extends Component {
  render() {
    return (
      <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text style = {{backgroundColor: 'red', fontSize: 40}} onPress = {this._backAction.bind(this)}>返回</Text>
      </View>
    );
  }

  _backAction() {
    this.props.navigator.pop()
  }
}

class goodsDetail extends Component {
  render() {
    return(
      <NavigatorIOS
          initialRoute={{
          component: goodsDetail_views,
          title: "货源详情页面",
          titleTextColor: '#fff',
          barTintColor: '#e23f42',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = goodsDetail_views
