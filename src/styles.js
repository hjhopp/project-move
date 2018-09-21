import { StyleSheet } from 'react-native';

const yellow = '#e2e023';
const darkSlate = '#363636';

export default StyleSheet.create({
  container : {
    flex            : 1,
    backgroundColor : yellow,
    alignItems      : 'center',
    paddingTop      : 10
  },

  text : {
    fontSize   : 50,
    fontWeight : 'bold',
    color      : darkSlate
  },

  input : {
    padding  : 10,
    fontSize : 20
  },

  button : {
    width  : 200,
    height : 85,
    backgroundColor : darkSlate,
    borderRadius : 50
  }
});
