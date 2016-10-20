import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  NavigatorIOS
} from 'react-native';


class setting_views extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}


class setting extends Component {
  render() {
    return(
      <NavigatorIOS
          initialRoute={{
          component: setting_views,
          title: "设置",
          titleTextColor: '#fff',
          barTintColor: '#e23f42',
        }}
      />
    );
  }
}


const styles = StyleSheet.create({
});



module.exports = setting
