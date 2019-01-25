import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { addNewTask } from '../actions/Index';

export default class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        newTaskName: ''
    });
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput 
            style = {styles.textInputStyle}
            keyboardType = "default"
            placeholderTextColor = 'white'
            placeholder = "Ingrese nueva tarea"
            autoCapitalize = "none"
            onChangeText = { (text) => {
                this.setState({newTaskName: text})
            }} />
        <TouchableHighlight
            style = { styles.touchableStyle}
            underlayColor = 'blue'
            onPress = { (event) => {
                if ( !this.state.newTaskName.trim()){
                    alert("sadadad")
                    return;
                }
                this.props.onClickAdd(this.state.newTaskName);
            }}>
            <Image style = { styles.imageStyle} source = { { uri: "https://media.gettyimages.com/photos/vernazza-nights-picture-id988625206"}}>

            </Image>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'tomato',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 64
    },
    textInputStyle: {
        height: 40,
        width: 200,
        margin: 10,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        color: 'white'
    },
    touchableStyle: {
        marginRight: 30
    },
    imageStyle: {
        width: 35,
        height: 35
    }
})