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

  routineContainer : {
    flex            : 1,
    width           : 375,
    height          : 75,
    backgroundColor : darkSlate,
    margin          : 5,
    borderRadius    : 5,
    alignItems      : 'center',
    justifyContent  : 'center'
  },

  label : {
    fontSize : 25,
    color    : yellow
  }
});
