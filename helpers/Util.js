import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio
} from 'react-native';

module.exports = {
  size: {
    height: Dimensions.get('window').height,
    width : Dimensions.get('window').width
  },
    pixel: 1/PixelRatio.get()
}
