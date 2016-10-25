

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  NavigatorIOS,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Util     from '../helpers/Util'
import Swiper from 'react-native-swiper';

const width = Util.size.width;
const scrollHeight = Util.size.height - 64 - 49;

class home_views extends Component {
  render() {
    return (
      <View style = {{flexDirection: 'column', backgroundColor: '#f5f5f5', flex: 1}}>

        <View style = {{width: width, height: 64, backgroundColor: '#e23f42', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            首页
          </Text>
        </View>

        <ScrollView style={{height: scrollHeight, flex: 1}}>
          <View style={{width: width, height: 150, backgroundColor: 'blue', marginTop: -20}}>
             <Swiper style={styles.wrapper} showsButtons={false} height={150} width={width} automaticallyAdjustContentInsets = {true} autoplay={true} bounces={true}>
                  <Image
                    style={{justifyContent: 'center', alignItems: 'center', width: width}}
                    resizeMode={Image.resizeMode.stretch}
                    source={require('./../images/fast_01.png')}
                  />

                  <Image
                    style={{justifyContent: 'center', alignItems: 'center', width: width}}
                    resizeMode={Image.resizeMode.stretch}
                    source={require('./../images/fast_02.png')}
                  />
                  <Image
                    style={{justifyContent: 'center', alignItems: 'center', width: width}}
                    resizeMode={Image.resizeMode.stretch}
                    source={require('./../images/fast_03.png')}
                  />


                  <Image
                    style={{justifyContent: 'center', alignItems: 'center', width: width}}
                    source={require('./../images/fast_04.png')}
                  />
              </Swiper>
          </View>



          <View style={{flex: 1}}>
            <View style={{width: width, height: 195, backgroundColor: 'white', flexDirection:'row'}}>

              <View style={{backgroundColor: '#ec605f', flex: 0.5, margin: 5, marginRight: 2.5, marginBottom: 2.5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('./../images/fast_ca.png')}
                />
              </View>
              <View style={{backgroundColor: 'white', flex: 0.5, margin: 5, marginLeft: 2.5, marginBottom: 2.5, borderRadius: 5, flexDirection: 'column'}}>
                <View style={{backgroundColor: '#ff9900', flex: 0.5, marginBottom: 2.5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('./../images/gh_fast_tr.png')}
                  />
                </View>
                <View style={{backgroundColor: '#fbbe2f', flex: 0.5, marginTop: 2.5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('./../images/fast_bi.png')}
                  />
                </View>
              </View>
            </View>

            <View style={{width: width, height: 195, backgroundColor: 'white', flexDirection:'row'}}>
              <View style={{backgroundColor: 'white', flex: 0.5, margin: 5, marginRight: 2.5, marginTop: 2.5, borderRadius: 5, flexDirection: 'column'}}>
                <View style={{backgroundColor: '#00c9c2', flex: 0.5, marginBottom: 2.5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('./../images/fast_sc.png')}
                  />
                </View>
                <View style={{backgroundColor: '#05b0f5', flex: 0.5, marginTop: 2.5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('./../images/fast_co.png')}
                  />
                </View>
              </View>
              <View style={{backgroundColor: '#4b95fe', flex: 0.5, margin: 5, marginLeft: 2.5, marginTop: 2.5, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('./../images/gh_fast_as.png')}
                />
              </View>
            </View>
          </View>

        </ScrollView>


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

    paginationStyleWhite: {

    },
    wrapper: {
      backgroundColor: 'orange',
      marginTop: 0
    },
    wrapImage: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
});

module.exports = home_views
