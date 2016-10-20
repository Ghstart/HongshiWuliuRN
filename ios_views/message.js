import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS
} from 'react-native';


class message_views extends Component {
  render() {
    return (
      <View>
        <Text>12</Text>
      </View>
    );
  }
}

class message extends Component {
  render() {
    return(
      <NavigatorIOS
          initialRoute={{
          component: message_views,
          title: "消息",
          titleTextColor: '#fff',
          barTintColor: '#e23f42',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = message
