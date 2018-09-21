import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './src/components/Bananas';

const Greeting = (props) => {
  return (
    <Text>Hello { props.name }!</Text>
  );
}
export default class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const names = [ 'Maxine', 'Chloe', 'Rachel' ];
    console.log(this);

    return (
      <View style={ styles.container }>
       <Text style={ styles.text }>PROJECT MOVE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#e2e023',
    alignItems : 'center',
    justifyContent : 'center'
  },

  text : {
    fontSize : 50,
    fontWeight : 'bold',
    color : '#363636'
  }
});
