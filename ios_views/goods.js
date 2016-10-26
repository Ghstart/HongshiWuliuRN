import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  NavigatorIOS,
  Image,
  TouchableHighlight
} from 'react-native';

import Nav from './common/navigator'
import Util     from '../helpers/Util'
import request  from '../helpers/request'
import config   from '../helpers/config'

const width = Util.size.width;

class goods_views extends Component {
  constructor() {
    super()

    var datas = []
    for(var i = 0; i < 10; i++) {
      datas.push(
        'row' + i
      );
    }

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(datas),
   };

  }

  render() {
    return(
      <View style = {{flexDirection: 'column', backgroundColor: '#fff', flex: 1}}>

        <View style = {{width: width, height: 64, backgroundColor: '#e23f42', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            货源
          </Text>
        </View>


        <View style = {{flex:1}}>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
              <View style = {{height: 255,justifyContent: 'center', alignItems: 'center', marginTop: -20}}>
                <Image
                  resizeMode={Image.resizeMode.stretch}
                  style={{width: width-20}}
                  source={require('./../images/iosbg@2x.png')}>

                  <View style = {{backgroundColor: 'transparent' ,width: width-10, height: 40, flexDirection: 'row'}}>

                    <Text style = {{paddingLeft: 15, paddingTop: 15, fontSize: 12, color: '#333', flex: 1}}>
                     承运期 2016.10.05-2016.10.31
                    </Text>


                    <View style = {{paddingTop: 15, paddingRight: 15, flexDirection: 'row'}}>
                      <Image
                        style={{paddingRight: 15}}
                        source={require('./../images/eye@2x.png')}
                      />

                      <Text style = {{paddingLeft: 5, fontSize: 12, color: '#333'}}>
                       595
                     </Text>

                    </View>

                  </View>

                  <View style = {{flex:1}}>

                    <View style = {{flexDirection: 'row'}}>
                      <Image
                        style = {{marginLeft : 15, marginTop: 15 }}
                        source={require('./../images/start@2x.png')}
                      />

                      <View style = {{flexDirection: 'column', alignItems: 'center'}}>
                        <Text style = {{marginTop: 15, marginLeft: 5, fontSize: 16, color: '#333'}}>临海市</Text>

                        <Text style = {{marginTop: 15, marginLeft: 5, fontSize: 12, color: '#999999'}}>台州市</Text>
                      </View>


                      <View style = {{flexDirection: 'column', alignItems: 'center'}}>
                        <Image
                          style={{marginTop: 15, marginLeft: 5}}
                          source={require('./../images/truck@2x.png')}
                        />

                          <Text style = {{marginTop: 18, marginLeft: 5, fontSize: 12, color: '#ff6600'}}>临海市</Text>
                      </View>


                      <Image
                        style = {{marginLeft : 5, marginTop: 15 }}
                        source={require('./../images/end@2x.png')}
                      />

                      <View style = {{flexDirection: 'column',alignItems: 'center'}}>
                          <Text style = {{marginTop: 15, marginLeft: 5, fontSize: 16, color: '#333'}}>兰溪市</Text>

                          <Text style = {{marginTop: 15, marginLeft: 5, fontSize: 12, color: '#999999'}}>金华市</Text>
                      </View>

                    </View>



                    <View style = {{flexDirection: 'row'}}>
                      <Image
                        style = {{marginTop: 15, marginLeft: 15}}
                        source={require('./../images/description@2x.png')}
                      />

                      <Text style = {{marginTop: 15, marginLeft: 5, fontSize: 14, color: '#666'}}>烟煤(临海-双狮)</Text>

                      <Text style = {{marginTop: 15, marginLeft: 5, fontSize: 14, color: '#666'}}>2000车</Text>
                    </View>

                    <View style = {{flexDirection: 'row'}}>
                      <Image
                        style = {{marginTop: 15, marginLeft: 15}}
                        source={require('./../images/description@2x.png')}
                      />

                      <Text style = {{marginTop: 15, marginLeft: 5, fontSize: 14, color: '#33cccc'}}>一口价</Text>

                      <Text style = {{marginTop: 8, marginLeft: 5, fontSize: 20, color: '#e23f42'}}>60.00</Text>

                      <Text style = {{marginTop: 15, marginLeft: 5, fontSize: 14, color: '#666'}}>元/吨</Text>
                    </View>

                    <View style = {{flexDirection: 'row'}}>
                      <Text style = {{marginTop: 5, marginLeft: 15, fontSize: 12, color: '#33cccc'}}>剩余33车</Text>
                    </View>

                    <View style = {{flexDirection: 'row'}}>
                    <View style = {{flex:1, flexDirection: 'row'}}>
                      <Text style = {{marginTop: 15, marginLeft: 15, fontSize: 12, color: '#999'}}>距离您</Text>

                      <Text style = {{marginTop: 15, marginLeft: 1, fontSize: 12, color: '#ff3300'}}>194.8</Text>

                      <Text style = {{marginTop: 15, marginLeft: 1, fontSize: 12, color: '#999'}}>公里 23天前发布</Text>
                    </View>

                    <View>
                      <Image
                        style={{marginTop: 5, marginRight: 15}}
                        source={require('./../images/order@2x.png')}
                      />
                    </View>

                    </View>


                  </View>


                </Image>


              </View>
          }
          />
        </View>

      </View>
    );
  }

  componentDidMount() {
    var requestURL = 'https://cz.redlion56.com/gwcz/commonservice/basic/featchInfo.do';
    this._loadListDatas()
    // var body = {
    //   currentPage : 1,
    //   fromType : 1,
    //   lat : "37.78584",
    //   lng : "-122.4064",
    //   pageSize : 10,
    //   recipientAreaId : '',
    //   senderAreaId : ''
    // }

  }


  //
  _loadListDatas() {
    console.log('start request datas...');

    var requestURL = 'https://cz.redlion56.com/gwcz/commonservice/basic/featchInfo.do';

    var body = {
      currentPage: 1,
      fromType: 1,
      lat: '30.25764',
      lng: "120.2071",
      pageSize: 10,
      recipientAreaId: '',
      senderAreaId: ''
    }

    console.log(requestURL);
    fetch(requestURL, {
          method: 'POST',
          body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          console.log('111');
          return responseJson;
        })
      .catch((error) => {
        console.error(error);
        console.log('222');
      });
  }
}

class goods extends Component {
  render() {
    return(
      <NavigatorIOS
          initialRoute={{
          component: goods_views,
          title: "货源",
          titleTextColor: '#fff',
          barTintColor: '#e23f42',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = goods_views
