import React, { Component } from 'react';
import { Container, Header, Title, Button,Content,Text} from 'native-base';
import {AppRegistry,Image ,StyleSheet,View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
 

export default class task extends Component {
  render() {
    return (
      
      <Container>

          <Header style={{backgroundColor:'#01cca1'}}>
                    <Button transparent style={{color:'white'}}>
                        <Icon name='bars' color="white" />
                    </Button>
                    
                  
                    <Title style={{fontSize:14}}> F </Title>
                   
                    
                    <Button transparent style={{color:'white'}}>
                        <Icon name='search' color="white"/>
                    </Button>

          </Header>
          <Content>
          
          <TouchableOpacity style={{backgroundColor:'#00e0b0',alignItems:'center',height:70,justifyContent:'center'}}>
          <Text style={{alignItems:'center',justifyContent:'center',color:'white',fontWeight: 'bold',fontSize:18}}> MONDAY</Text>
          <Text style={{alignItems:'center',justifyContent:'center',color:'white'}}>April 6 ,2016 </Text> 
          </TouchableOpacity>
          
          <View style={{flex:1,borderLeftWidth:2 ,borderColor:'grey',marginLeft:5 ,marginTop:3 ,padding:15}}>
          </View>
          
          <View style={{flex:1,marginLeft:3,flexDirection:'row'}}>
              
              <Icon name="bookmark" color="grey">
              <Text style={{color:"#01cca1",fontWeight: 'bold',fontSize:14}}> BOOKMARKED </Text></Icon>
              
              <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginRight:5}}>
                <Icon name="clock-o" color="grey" />
                <Text style={{alignItems:'flex-end',justifyContent:'flex-end' ,color:'#CBCFCC'}}> 6.00 PM</Text>
              </View>
          </View>
          
          <View style={{flex:1,borderLeftWidth:2 ,borderColor:'grey',marginLeft:5 ,marginTop:3 ,padding:25}}>
               <Text style={{ fontWeight: 'bold',fontSize:14}}>Lorem lpsum is simply dummmy text of the printing and typesetting industry.</Text>
          </View>

        <View style={{flex:1,marginLeft:3,flexDirection:'row'}}>
              
              <Icon name="comments" color="grey">
              <Text style={{color:"#01cca1",fontWeight: 'bold',fontSize:14}}> COMMENTED </Text></Icon>
              
              <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginRight:5}}>
                <Icon name="clock-o" color="grey" />
                <Text style={{alignItems:'flex-end',justifyContent:'flex-end' ,color:'#CBCFCC'}}> 6.00 PM</Text>
              </View>
          </View>

          <View style={{flex:1,borderLeftWidth:2 ,borderColor:'grey',marginLeft:5 ,marginTop:3 ,padding:25}}>
               <Text style={{ fontWeight: 'bold',}}> It has roots in a piece of classical Latin literature from 45 BC.</Text>
                  <Text style={{marginLeft:30,color:'grey',fontSize:12}}>'Lorem lpsum is simply dummmy text of the printing and typesetting industry '</Text>
          </View>

     
     <View style={{flex:1,marginLeft:3,flexDirection:'row'}}>
              
              <Icon name="bookmark" color="grey">
              <Text style={{color:"#01cca1",fontWeight: 'bold',fontSize:14}}> FOLLOWED </Text></Icon>
              
              <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginRight:5}}>
                <Icon name="clock-o" color="grey" />
                <Text style={{alignItems:'flex-end',justifyContent:'flex-end' ,color:'#CBCFCC'}}> 6.00 PM</Text>
              </View>
          </View>

          <View style={{flex:1,borderLeftWidth:2 ,borderColor:'grey',marginLeft:5 ,marginTop:3 ,padding:25}}>
               <Text style={{ fontWeight: 'bold',fontSize:14}}> 'SPORTS' channel</Text>
          </View>


         <View style={{flex:1,marginLeft:3,flexDirection:'row'}}>
              
              <Icon name="bookmark" color="grey">
              <Text style={{color:"#01cca1",fontWeight: 'bold',fontSize:14}}> SHARED</Text></Icon>
              
              <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',marginRight:5}}>
                <Icon name="clock-o" color="grey" />
                <Text style={{alignItems:'flex-end',justifyContent:'flex-end' ,color:'#CBCFCC'}}> 6.00 PM</Text>
              </View>
          </View>

          <View style={{flex:1,borderLeftWidth:2 ,borderColor:'grey',marginLeft:5 ,marginTop:3 ,padding:25}}>
               <Text style={{ fontWeight: 'bold',fontSize:14}}>Lorem lpsum is simply dummmy text of the printing and typesetting industry.</Text>
          </View>

          </Content>

      </Container>

          
                );
  }
}
  const styles = StyleSheet.create({
 
   backgroundImage:{
      flex:1,
      flexDirection:'row',
      flexWrap: 'wrap' ,
      alignSelf:'stretch', 

   },


} );

AppRegistry.registerComponent('task', () => task);