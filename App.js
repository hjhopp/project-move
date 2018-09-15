import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './src/components/Bananas';

const Greeting = (props) => {

  return (
    <Text>Hello { props.name }!</Text>
  );
}
export default class App extends React.Component {
  render() {
    const names = [ 'Maxine', 'Chloe', 'Rachel' ];

    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Bananas />
        {
          names.map((name, i) => (
            <Greeting key={ i } name={ name } />
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
