import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS
} from 'react-native';


class task_views extends Component {
  render() {
    return (
      <View>
        <Text>1</Text>
      </View>
    );
  }
}

class task extends Component {
  render() {
    return(
      <NavigatorIOS
          initialRoute={{
          component: task_views,
          title: "任务",
          titleTextColor: '#fff',
          barTintColor: '#e23f42',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = task
