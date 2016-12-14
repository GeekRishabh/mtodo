import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, ScrollView } from 'react-native';
import { Button, Icon, Input, InputGroup, List, ListItem, CheckBox } from 'native-base';
import {observer} from 'mobx-react/native';

import TodoView from './todoView';
import todoStore from '../../store/todoStore';


@observer
class TodoList extends Component {

    constructor(props) {
        super(props);
    }

    getList() {
        if(todoStore.todos.length > 0) {
            return todoStore.todos.map((todo, index) => {
                return (
                    <TodoView store={todoStore} key={index} todo={todo} />
                )
            });
        } else {   
            return ( 
                <Text 
            style={{alignSelf: 'center', justifyContent: 'center', marginTop: 10, fontWeight: 'bold', fontSize: 25, color: "#999"}}>
            No ToDo Item </Text> 
        )
         }

    }

    render() {
        return (
            <View>
                <List style={{marginLeft:15 , marginRight:20}}>
                    {this.getList()}
                </List>
            </View>
        );
    }
}

export default TodoList;