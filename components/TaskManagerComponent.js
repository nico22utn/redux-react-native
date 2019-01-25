import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';

export default class TaskManagerComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.managerStyle}>
        <AddContainer/>
        <TaskListContainer/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    managerStyle: {
        flex: 1,
        marginTop: 22
    }
})