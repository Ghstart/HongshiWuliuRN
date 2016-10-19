import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


class setting extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.text}>设置</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

module.exports = setting
