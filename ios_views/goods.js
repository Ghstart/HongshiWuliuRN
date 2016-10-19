import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


class goods extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.text}>货源</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});

module.exports = goods
