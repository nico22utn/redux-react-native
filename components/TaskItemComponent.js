import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class TaskItemComponent extends Component {
  
  render() {
    return (
      <View style = {{ flex: 1}}>
        <TouchableOpacity 
            style = {{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }}
            onPress = { (event) => {

            }}>
        </TouchableOpacity>
        <Text style = { { margin: 20, color: this.props.completed == true ? 'darkgreen' : 'black'}}> {this.props.taskName} </Text>
      </View>
    );
  }
}
