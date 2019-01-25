import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/Index';
import TaskManagerComponent from './components/TaskManagerComponent';

var store = createStore(allReducers);
export default class App extends React.Component {

  
  render() {
    return (
      <Provider store = {store}>
        <TaskManagerComponent/>
      </Provider>
    );
  }
}
