import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  ListView
} from 'react-native';

import Util     from '../helpers/Util'

const width = Util.size.width;


class task_views extends Component {
  constructor() {
    super();
    var datas = []
    for (var i = 0; i < 10; i++) {
      datas.push(
        'row' + i
      )
    }

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: dataSource.cloneWithRows(datas),
    }
  }

  render() {
    return (
      <View style = {{flexDirection: 'column', backgroundColor: '#fff', flex: 1}}>

        <View style = {{width: width, height: 64, backgroundColor: '#e23f42', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            任务
          </Text>
        </View>
        <View style={{flex: 1}}>
          <ListView
            style={{backgroundColor: '#f5f5f5'}}
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <View style={styles.taskCell}>
                <View style={styles.taskCellView}>
                  {/*顶部视图*/}
                  <View>

                  </View>
                  {/*顶部线*/}
                  <View>

                  </View>
                  {/*中部视图*/}
                  <View>

                  </View>
                  {/*中部线*/}
                  <View>

                  </View>
                  {/*底部视图*/}
                  <View>

                  </View>
                  
                </View>
              </View>

            }
            />

        </View>


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
    taskCell: {
      height: 200,
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      marginTop: -20
    },
    taskCellView: {
      width: width - 20,
      height: 190,
      backgroundColor: 'white',
      marginTop:5,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: -5,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    }
});

module.exports = task_views
