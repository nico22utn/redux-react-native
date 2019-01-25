import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import TaskItemComponent from './TaskItemComponent';
import TaskItemContainer from '../containers/TaskItemContainer';

export default class TaskListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList 
        data = {this.props.tasks}
        renderItem = { ({item,index}) => {
            return (
                <TaskItemContainer {...item}></TaskItemContainer>
            );
        }}
        keyExtractor = { (item,index) => item.taskName}>
      </FlatList>
    );
  }
}
