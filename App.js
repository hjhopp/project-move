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
    this.state = {
      isShowing : true
    };
    setInterval(() => {
      this.setState((previousState) => {
        return {
          isShowing : !previousState.isShowing
        };
      });
    }, 1000);
  }

  render () {
    const names = [ 'Maxine', 'Chloe', 'Rachel' ];
    console.log(this);

    return (
      <View style={styles.container}>
        { this.state.isShowing ?
          (
              <Text>Hello world!</Text>
          ) :
          (
            <Text>Lulz</Text>
          )
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
