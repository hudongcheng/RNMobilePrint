/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './js/containers/App';
import counter from './js/reducers'


const store = createStore(counter)

store.subscribe(() =>
  alert(store.getState())
)

class RNMobilePrint extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('RNMobilePrint', () => RNMobilePrint);
