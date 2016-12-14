import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, ScrollView } from 'react-native';
import { Button, Icon, Input, InputGroup, List, ListItem, CheckBox } from 'native-base';
import {observer} from 'mobx-react/native';

import todoStore from './store/todoStore';

@observer
export default class TodoView extends Component {

    
    toggleTodo()
   {
    todoStore.toggleTodo(this.props.id);
   }

   deleteTodo()
   {
     todoStore.deleteTodo(this.props.id);
    }   

    render() {
        return (
            <ListItem>
                <CheckBox
                    checked={this.props.todo.completed}
                    onPress={() => this.toggleTodo()}
                />
                { this.props.todo.completed
                    ?
                    <Text style={{textDecorationLine: 'line-through'}}>{this.props.todo.name}</Text>
                    :
                    <Text>{this.props.todo.name}</Text>
                }
                
                    <Icon name="md-trash" style={{fontSize: 20}} onPress={() => this.deleteTodo()} />
                    
                }
            </ListItem>
        );
    }
}
