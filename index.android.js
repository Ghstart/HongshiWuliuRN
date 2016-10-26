/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// bowen
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class HongshiWuLiuRN extends Component {

  render() {
  return <ScrollableTabView
    style={{marginTop: 20}}
    renderTabBar={() => <DefaultTabBar />}
  >
    <Text tabLabel='Tab #1'>My</Text>
    <Text tabLabel='Tab #2'>favorite</Text>
    <Text tabLabel='Tab #3'>project</Text>
  </ScrollableTabView>;
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HongshiWuLiuRN', () => HongshiWuLiuRN);
