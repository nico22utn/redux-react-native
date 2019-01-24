import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/Index';

export default class App extends React.Component {

  store = createStore();

  constructor(props){

  }
  render() {
    return (
      <Provider store = {store}>

      </Provider>
    );
  }
}
