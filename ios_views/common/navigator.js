import React, {Component} from 'react';
import {
  NavigatorIOS,
  View,
  Text
} from 'react-native';

class navigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navtitle: props.title,
      navcomponent: pops.component
    }
  }

  render() {

    return(
      <View>
        <Text>
          123
        </Text>
      </View>
    );
  }
}

module.exports = navigator;
