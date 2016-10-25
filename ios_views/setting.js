import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  NavigatorIOS,
  Text,
  ScrollView,
  Image
} from 'react-native';

import Util from './../helpers/Util'

const width = Util.size.width;
const pix   = Util.pixel;
const viewWidth = (width - 2 * pix) / 3.0

class setting_views extends Component {
  constructor() {
    super()

    this.state = {
      countView: [1,2,3,4,5,6,7]
    }


    console.log(this.state.countView);
  }

  render() {
    return (
      <ScrollView style = {{backgroundColor: '#f5f5f5'}}>
        <View style = {{backgroundColor: '#f5f5f5'}}>
          <View style = {{backgroundColor: '#e23f42',height: 201, marginTop: -20}}>
            <Text>头部视图</Text>
          </View>
          <View style = {{flex: 1, flexDirection: 'row', flexWrap:'wrap'}}>

          <View
            style={         {width:viewWidth,height:viewWidth,backgroundColor:"#fff",marginRight: pix / 2, marginBottom: pix/2, justifyContent: 'center', alignItems: 'center'}}>

            <Image
              style={{backgroundColor: 'red'}}
              source={require('./../images/identity@2x.png')}
            />

            <Text style = {{paddingTop: 3, backgroundColor: 'orange'}}>
              实名认证
            </Text>

            <Image
              style={{backgroundColor: 'darkgray', marginTop: 5}}
              source={require('./../images/un@2x.png')}
            />
          </View>

          <View
            style={         {width:viewWidth,height:viewWidth,backgroundColor:"#fff", marginRight: pix/2, marginLeft: pix/2, marginBottom: pix/2,  justifyContent: 'center', alignItems: 'center'}}>

            <Image
              source={require('./../images/enterprise@2x.png')}
            />
            <Text style = {{paddingTop: 3}}>
              企业认证
            </Text>

            <Image
              source={require('./../images/un@2x.png')}
            />
          </View>

          <View
            style={         {width:viewWidth,height:viewWidth,backgroundColor:"#fff", marginLeft: pix/2, marginBottom: pix/2,  justifyContent: 'center', alignItems: 'center'}}>

            <Image
              source={require('./../images/drive@2x.png')}
            />
            <Text style = {{paddingTop: 3}}>
              驾照认证
            </Text>

            <Image
              source={require('./../images/un@2x.png')}
            />
          </View>

          <View
            style={         {width:viewWidth,height:viewWidth,backgroundColor:"#fff", marginTop: pix/2, marginRight: pix/2, marginBottom: pix/2,  justifyContent: 'center', alignItems: 'center'}}>

            <Image
              source={require('./../images/purse@2x.png')}
            />
            <Text style = {{paddingTop: 5}}>
              我的钱包
            </Text>
          </View>

          <View
            style={         {width:viewWidth,height:viewWidth,backgroundColor:"#fff",margin:pix/2,  justifyContent: 'center', alignItems: 'center'}}>

            <Image
              source={require('./../images/my-truck@2x.png')}
            />
            <Text style = {{paddingTop: 5}}>
              我的车辆
            </Text>
          </View>

          <View
            style={         {width:viewWidth,height:viewWidth,backgroundColor:"#fff", marginTop: pix/2, marginLeft: pix/2, marginBottom: pix/2,  justifyContent: 'center', alignItems: 'center'}}>

            <Image
              source={require('./../images/service@2x.png')}
            />
            <Text style = {{paddingTop: 5}}>
              联系客服
            </Text>
          </View>

          <View
            style={         {width:viewWidth,height:viewWidth,backgroundColor:"#fff",marginTop: pix/2, marginRight: pix/2, marginBottom: pix/2,  justifyContent: 'center', alignItems: 'center'}}>

            <Image
              source={require('./../images/setting@2x.png')}
            />
            <Text style = {{paddingTop: 5}}>
              设置
            </Text>
          </View>

          </View>
        </View>
      </ScrollView>
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



module.exports = setting_views
