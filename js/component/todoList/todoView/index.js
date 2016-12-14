import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, ScrollView } from 'react-native';
import { Button, Icon, Input, InputGroup, List, ListItem, CheckBox } from 'native-base';
import {observer} from 'mobx-react/native';

import todoStore from '../../../store/todoStore';

@observer
export default class TodoView extends Component {

    
    toggleTodo() {
        todoStore.toggleTodo(this.props.id);
    }

    deleteTodo() {
        todoStore.deleteTodo(this.props.id);
    }   

    render() {
        return (
            <ListItem>
                <CheckBox
                    checked={this.props.todo.completed}
                />
                <Text>{this.props.todo.name}</Text>
            </ListItem>
        );
    }
}
