import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Task     from './ios_views/task';
import Goods    from './ios_views/goods'
import Home     from './ios_views/home'
import Message  from './ios_views/message'
import Setting  from './ios_views/setting'

import Util     from './helpers/Util'

class HongshiWuLiuRN extends Component {
  constructor() {
    super();

    this.state = {
      selected: 'home'
    }
  }

  _renderView(moduleName) {
    switch (moduleName) {
      case 'task':
        return (
          <Task/>
        );
        break;
      case 'goods':
        return (
          <Goods/>
        );
        break;
      case 'home':
        return (
          <Home/>
        );
        break;
      case 'message':
        return (
          <Message/>
        );
        break;
      case 'setting':
        return (
          <Setting/>
        );
        break;
      default:
        return ( <View></View> );
        break;
    }
  }

  render() {
    return(
      <TabBarIOS
        tintColor = '#e23f42'
      >
        <TabBarIOS.Item
          title = "任务"
          selected = { this.state.selected === 'task' }
          icon = {require('./images/mission.png')}
          selectedIcon={require('./images/mission-1@2x.png')}
          onPress = {() => {
            this.setState({
              selected: 'task'
            })
          }}>

          {this._renderView(this.state.selected)}


        </TabBarIOS.Item>

        <TabBarIOS.Item
          title = "货源"
          selected = { this.state.selected === 'goods' }
          icon = {require('./images/goods@2x.png')}
          selectedIcon={require('./images/goods-1@2x.png')}
          onPress = {() => {
            this.setState({
              selected: 'goods'
            })
          }}>


          {this._renderView(this.state.selected)}

        </TabBarIOS.Item>

        <TabBarIOS.Item
          title = "首页"
          selected = { this.state.selected === 'home' }
          icon = {require('./images/home@2x.png')}
          selectedIcon={require('./images/home-1@2x.png')}
          onPress = {() => {
            this.setState({
              selected: 'home'
            })
        }}>

          {this._renderView(this.state.selected)}

        </TabBarIOS.Item>

        <TabBarIOS.Item
          title = "消息"
          selected = { this.state.selected === 'message' }
          icon = {require('./images/news@2x.png')}
          selectedIcon={require('./images/news-1@2x.png')}
          onPress = {() => {
            this.setState({
              selected: 'message'
            })
          }}>

          {this._renderView(this.state.selected)}

        </TabBarIOS.Item>

        <TabBarIOS.Item
          title = "设置"
          selected = { this.state.selected === 'setting' }
          icon = {require('./images/user@2x.png')}
          selectedIcon={require('./images/user-1@2x.png')}
          onPress = {() => {
            this.setState({
              selected: 'setting'
            })
          }}>

          {this._renderView(this.state.selected)}

        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('HongshiWuLiuRN', () => HongshiWuLiuRN);
