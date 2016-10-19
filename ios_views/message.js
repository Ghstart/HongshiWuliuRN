import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


class message extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.text}>消息</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

module.exports = message
