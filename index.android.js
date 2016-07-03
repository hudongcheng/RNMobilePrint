/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import App from './js/containers/App';
import configureStore from './js/store/configureStore';

const store = configureStore();

class RNMobilePrint extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

store.subscribe(() =>
  alert(store.getState().counter)
)

AppRegistry.registerComponent('RNMobilePrint', () => RNMobilePrint);
