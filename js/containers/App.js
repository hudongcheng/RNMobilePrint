 'use strict';


import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { connect } from 'react-redux'

type Props = {
  counter: PropTypes.number;
  increment: () => void;
  ecrement: () => void;
};

class App extends Component {
  props: Props;

  constructor(props) {
    super(props)
    //this.incrementAsync = this.incrementAsync.bind(this)
    //this.incrementIfOdd = this.incrementIfOdd.bind(this)
    // this.state = {
    //   value: 0
    // }
  }

  // onIncrement() {
  //   //this.props.dispatch({type:'INCREMENT'});
  //   alert('inc ' + this.props.value);
  // }

  // onDecrement() {
  //   //this.props.dispatch({type:'DECREMENT'});
  //   alert('dec ' + this.props.value);
  // }

  render() {
    const {increment, decrement, counter} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Clicked: {counter} times
        </Text>
        <TouchableHighlight onPress={increment}>
          <Text style={styles.instructions}>
            increment
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrement}>
          <Text style={styles.instructions}>
            decrement
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}


App.propTypes = { counter: React.PropTypes.number };
App.defaultProps = { counter: 0 };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function select(store) {
  return {
    counter: store.counter
  };
}

function actions(dispatch) {
  return {
    increment: () => dispatch({type:'INCREMENT'}),
    decrement: () => dispatch({type:'DECREMENT'}),
  };
}

export default connect(select, actions)(App)