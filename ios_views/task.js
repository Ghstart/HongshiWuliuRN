import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


class task extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.text}>任务</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

module.exports = task
