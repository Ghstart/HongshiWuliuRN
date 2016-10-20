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
      <NavigatorIOS
          initialRoute={{
          component: that.state.navcomponent,
          title: that.state.navtitle,
          titleTextColor: '#fff',
          barTintColor: '#e23f42',
        }}
      />
    );
  }
}

module.exports = navigator;
