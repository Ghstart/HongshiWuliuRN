import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  NavigatorIOS
} from 'react-native';


class home_views extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

class home extends Component {
  render() {
    return(
      <NavigatorIOS
          initialRoute={{
          component: home_views,
          title: "红狮物流",
          titleTextColor: '#fff',
          barTintColor: '#e23f42',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = home
