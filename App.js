import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert
} from 'react-native';
import routines from './src/routines';
import styles from './styles';

const Routine = (props) => (
  <View style = { styles.routineContainer }>
    <Text style = { styles.label }>
      {
        props.label
      }
    </Text>
  </View>
)

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text : ''
    };
  }

  render () {
    return (
      <View style = { styles.container }>
        <Text style = { styles.text }>
          PROJECT MOVE
        </Text>
        {
          Object.entries(routines).map((routine, i) => (
            <Routine
              label = { routine[0] }
              key   = { i }
            />
          ))
        }
      </View>
    );
  }
};
