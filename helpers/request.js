'use strict'

var queryString = require('query-string')
var _ = require('lodash')
var request = {}
var config  = require('./config')

request.get = function(url, params, successCallBack, errorCallBack) {
  if (params) {
    url += '?' + queryString.stringify(params)
  }
  return fetch(url)
          .then((response) => response.json())
          .then((responseJSON) => {
            successCallBack(responseJSON)
          })
          .catch((error) => {
            errorCallBack(error
          })
}

request.post = function(url, body, successCallBack, errorCallBack){
  var options = _.clone(config.header, {
    body: JSON.stringify(body)
  })

  return fetch(url, options)
          .then((response) => response.json())
          .then((responseJSON) => {
            successCallBack(responseJSON)
          })
          .catch((error) => {
            errorCallBack(error)
          })
}

module.exports = request
