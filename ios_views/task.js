import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  ListView
} from 'react-native';


class task_views extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <Text>12</Text>
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

module.exports = task_views
