import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert
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

  _onPressButton () {
    Alert.alert('You tapped the button!');
  }

  render () {
    return (
      <View style = { styles.container }>
        <View>
          <Text style = { styles.text }>PROJECT MOVE</Text>
          <TextInput
              placeholder  = 'Type here to type something'
              onChangeText = { (text) => this.setState({ text }) }
          />
          <Text style = { styles.input }>
            {
              this.state.text
                .split(' ')
                .map((word) => word && '🍕')
                .join(' ')
            }
          </Text>
        </View>
        <View style = { styles.button }>
          <Button
            onPress = { this._onPressButton }
            title   = '🍕'
          />
        </View>
      </View>



    );
  }
}
