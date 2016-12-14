import React, { Component } from 'react';
import { TouchableHighlight, Text, View ,AppRegistry,StyleSheet,TextInput } from 'react-native';
import { Container, Header, Title, Content, Button, Footer,Input, List, ListItem } from 'native-base';
import {observer} from 'mobx-react/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import todoStore from './js/store/todoStore';
import { TodoList } from './js/component/todoList';

@observer
export default class mtodo extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      todoName: ''
    };
  }


  componentDidMount() {
  }

  createTodo() {
    console.log(todoStore);
    console.log(this.state.todoName);
    todoStore.addTodo(this.state.todoName);
  }

  render() {
    return (
      
        <Container>
        <View style={styles.container}>
                <Header>
                    <Button transparent>
                        <Icon name="home" style={{color: "green" ,fontSize:25}}/>
                    </Button>
                    <Title style={{color: 'green'}}>TodoList App</Title>
                </Header>
                <Content style={{backgroundColor: '#fff',width:400}}>
                   <List style={{flexDirection:'column' ,marginLeft:15}}>
                    <ListItem>
                      <Text>dsddhsjdsjhdsdhj</Text>
                    </ListItem>
                    <ListItem>
                      <Text>dsddhsjdsjhdsdhj</Text>
                    </ListItem>
                    <ListItem>
                      <Text>dsddhsjdsjhdsdhj</Text>
                    </ListItem>
                    <ListItem>
                      <Text>dsddhsjdsjhdsdhj</Text>
                    </ListItem>
                   </List>

                </Content>
                <Footer>
                  <TouchableHighlight>
                      <View style={{flexDirection: 'row'}}>
                <TextInput 
                  style={{width:150,margin:10, alignItems:'stretch', borderWidth:1}} 
                  onChangeText={(text) => this.setState({todoName: text})}
                  value={this.state.text}
                  onSubmitEditing={() => this.createTodo()}
                />
            <Button primary style={{marginTop:10 ,marginBottom:10 ,marginLeft:100 ,padding:5,justifyContent:'flex-end'}}>
                Add Item
            </Button>
            </View>
                   </TouchableHighlight>
                </Footer>
                </View>
            </Container>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

AppRegistry.registerComponent('mtodo', () => mtodo);
