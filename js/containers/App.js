 "use strict";


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
  value: PropTypes.number;
  // onIncrement: () => void;
  // onDecrement: () => void;
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

  onIncrement() {
    //this.props.dispatch({type:'INCREMENT'});
    alert('inc ' + this.props.value);
  }

  onDecrement() {
    //this.props.dispatch({type:'DECREMENT'});
    alert('dec ' + this.props.value);
  }

  render() {
    const {dispatch, store} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Clicked: {this.props.value} times
        </Text>
        <TouchableHighlight onPress={this.props.onIncrement.bind(this)}>
          <Text style={styles.instructions}>
            increment
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onDecrement.bind(this)}>
          <Text style={styles.instructions}>
            decrement
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}


App.propTypes = { value: React.PropTypes.number };
App.defaultProps = { value: 0 };


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
    
  };
}

function actions(dispatch) {
  return {
    onIncrement: () => dispatch({type:'INCREMENT'}),
    onDecrement: () => dispatch({type:'DECREMENT'}),
  };
}

export default connect(select, actions)(App)