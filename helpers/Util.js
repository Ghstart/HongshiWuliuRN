import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio
} from 'react-native';

var _ = require('lodash')
var config  = require('./config')

module.exports = {
  size: {
    height: Dimensions.get('window').height,
    width : Dimensions.get('window').width
  },
    pixel: 1/PixelRatio.get(),

    //
  post: function(url, body, successCallBack, failureCallBack) {

      var options = _.clone(config.header, {
          body: JSON.stringify(body)
      })

      console.log('options:----'+ options);

      return fetch(url, options)
        .then((response) => response.json())
        .then((responseJSON) => {
          console.log('call...');
          successCallBack(responseJSON)
        })
        .catch((error) => {
          console.log('call error');
          failureCallBack(error)
        })

    }
}
