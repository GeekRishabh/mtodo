import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, ScrollView ,Alert} from 'react-native';
import { Button, Icon, Input, InputGroup, List, ListItem, CheckBox } from 'native-base';
import {observer} from 'mobx-react/native';

import todoStore from '../../../store/todoStore';

@observer
export default class TodoView extends Component {

    
    toggleTodo() {
        console.log(this.props.todo.completed, 'oooooo');
        // Alert.alert('Are you sure to mark the item ');
        todoStore.toggleTodo(this.props.todo.id);
    }

    deleteTodo() {
        // Alert.alert('Are you sure to delete the item');
        todoStore.deleteTodo(this.props.todo.id);
    }   

    render() {
        return (
            <ListItem>
                <CheckBox
                    checked={this.props.todo.completed}
                    onPress={()=>this.toggleTodo()}
                />
               { this.props.todo.completed
                    ?
                    <Text style={{textDecorationLine: 'line-through'}}>{this.props.todo.name}</Text>
                    :
                    <Text>{this.props.todo.name}</Text>
                }
               <Button transparent  onPress={() => this.deleteTodo()} >
             <Icon name="md-trash" style={{fontSize: 20}} />
             </Button>
            </ListItem>
        );
    }
}
