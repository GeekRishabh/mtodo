import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, ScrollView ,Alert} from 'react-native';
import { Button, Icon, Input, InputGroup, List, ListItem, CheckBox } from 'native-base';
import {observer} from 'mobx-react/native';

import todoStore from '../../../store/todoStore';

@observer
export default class TodoView extends Component {

    
    toggleTodo() {
        todoStore.toggleTodo(this.props.id);
    }

    deleteTodo() {
        Alert.alert('Button has been pressed!');
        todoStore.deleteTodo(this.props.id);
    }   

    render() {
        return (
            <ListItem>
                <CheckBox
                    checked={true}
                    onPress={()=>this.toggleTodo()}
                />
               { this.props.todo.completed
                    ?
                    <Text style={{textDecorationLine: 'line-through'}}>{this.props.todo.name}</Text>
                    :
                    <Text>{this.props.todo.name}</Text>
                }
               <Button transparent  onPress={() => this.deleteTodo(todoStore.todo.id)} >
             <Icon name="md-trash" style={{fontSize: 20}} />
             </Button>
            </ListItem>
        );
    }
}
