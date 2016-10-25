

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


class home_views extends Component {
  render() {
    return (
      <View style = {{flexDirection: 'column', backgroundColor: '#f5f5f5', flex: 1}}>

        <View style = {{width: width, height: 64, backgroundColor: '#e23f42', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            首页
          </Text>
        </View>
        <ScrollView>
          <Swiper style={styles.wrapper} showsButtons={false} height={150} autoplay={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>

          <View style={{width: width, height: 195, backgroundColor: 'white', flexDirection:'row'}}>
            <View style={{backgroundColor: '#ec605f', flex: 0.5, margin: 5, marginRight: 2.5, marginBottom: 2.5, borderRadius: 5}}>
              <Image
                style={{marginLeft: 30, marginTop: 30}}
                source={require('./../images/fast_ca.png')}
              />
            </View>
            <View style={{backgroundColor: 'white', flex: 0.5, margin: 5, marginLeft: 2.5, marginBottom: 2.5, borderRadius: 5, flexDirection: 'column'}}>
              <View style={{backgroundColor: '#ff9900', flex: 0.5, marginBottom: 2.5, borderRadius: 5}}>
                <Image
                  style={{marginLeft: 30, marginTop: 30}}
                  source={require('./../images/gh_fast_tr.png')}
                />
              </View>
              <View style={{backgroundColor: '#fbbe2f', flex: 0.5, marginTop: 2.5, borderRadius: 5}}>
                <Image
                  style={{marginLeft: 30, marginTop: 30}}
                  source={require('./../images/fast_bi.png')}
                />
              </View>
            </View>
          </View>

          <View style={{width: width, height: 195, backgroundColor: 'white', flexDirection:'row'}}>
            <View style={{backgroundColor: 'white', flex: 0.5, margin: 5, marginRight: 2.5, marginTop: 2.5, borderRadius: 5, flexDirection: 'column'}}>
              <View style={{backgroundColor: '#00c9c2', flex: 0.5, marginBottom: 2.5, borderRadius: 5}}>
                <Image
                  style={{marginLeft: 30, marginTop: 30}}
                  source={require('./../images/fast_sc.png')}
                />
              </View>
              <View style={{backgroundColor: '#05b0f5', flex: 0.5, marginTop: 2.5, borderRadius: 5}}>
                <Image
                  style={{marginLeft: 30, marginTop: 30}}
                  source={require('./../images/fast_co.png')}
                />
              </View>
            </View>
            <View style={{backgroundColor: '#4b95fe', flex: 0.5, margin: 5, marginLeft: 2.5, marginTop: 2.5, borderRadius: 5}}>
              <Image
                style={{marginLeft: 30, marginTop: 30}}
                source={require('./../images/gh_fast_as.png')}
              />
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

    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
});

module.exports = home_views
