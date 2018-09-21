import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Bananas from './src/components/Bananas';
import styles from './src/styles';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text : ''
    };
  }

  render () {
    return (
      <View style={ styles.container }>
       <Text style={ styles.text }>PROJECT MOVE</Text>
      </View>
    );
  }
}
