import React, { Component } from 'react';
import { Container, Header, Title, Button,Content,Text} from 'native-base';
import {AppRegistry,Image ,StyleSheet,View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
 

export default class design extends Component {
  render() {
    return (
      
      <Image
        source={{uri: 'https://aconsumercredit.com/wp-content/uploads/2016/05/Airbnb-tropical-destination-vacations-timeshare-alternatives-american-consumer-credit-florida-1030x689.jpg'}}
        style={styles.backgroundImage}>
      <Container>

          <Header style={{backgroundColor:'transparent'}}>
                    <Button transparent style={{color:'white' , fontSize:10}}>
                        <Icon name='arrow-left' color="white"  />
                    </Button>
                    
                    <Title>Log In or Sign Up</Title>
                    
                    <Button transparent style={{color:'white'}}>
                        <Icon name='ellipsis-v' color="white"/>
                    </Button>
          </Header>

          <Content>
            <Image
        source={{uri: 'https://www.similarweb.com/corp/wp-content/uploads/2015/12/airbnb-logo2.png'

      }} style={{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        flexWrap: 'wrap' ,
        alignSelf:'stretch',
        alignItems:'center',
        resizeMode:'center',
        height:200,
        padding:10, 

      }}/>

                   
             <View style={styles.socials}>

                      <TouchableOpacity  style={{backgroundColor:"#dd4b39" ,padding:5 ,margin:10, flex: 1, flexDirection: 'row' ,height:45}}>
                      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                      <Icon name="google-plus" style={{fontSize: 15, flex:1,color:'white'}}>
                      </Icon>
                      </View>
                      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.social}>Google</Text>
                      </View>
                      <View style={{flex: 1}}>
                      </View>
                      </TouchableOpacity>
                   
                      <TouchableOpacity  style={{backgroundColor:"#3b5998" ,padding:5 ,marginLeft:10,marginRight:10,marginBottom:10 ,flex: 1, flexDirection: 'row',height:45 }}>
                      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                      <Icon name="facebook" style={{fontSize: 15, flex:1,color:'white'}}>
                      </Icon>
                      </View>
                      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.social}>Facebook</Text>
                      </View>
                      <View style={{flex: 1}}>
                      </View>
                      </TouchableOpacity>

                     
             </View>
                <View style={styles.others}>
                      <Button transparent style={{borderWidth:1 ,borderColor:'white' ,margin:10 ,padding:5,alignSelf:'stretch',flex:1,height:45}}>
                      <Text style={styles.other}> Sign Up 
                      </Text></Button>
                   

                      <Button transparent style={{borderWidth:1 ,borderColor:'white' ,margin:10,padding:5,alignSelf:'stretch',flex:1,height:45}}> 
                      <Text style={styles.other}>Log In </Text></Button>
                </View>
                  <View style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                      <Text style={{fontFamily:'Arial',margin:15, fontSize: 15 ,textAlign:'center' ,color:'white'}}>Show More</Text>

                   <Text style={{fontFamily:'Arial',marginLeft:5,marginTop:5, fontSize: 15 ,color:'white' ,justifyContent:'center',alignItems:'flex-end',textAlign:'center'}}>
                 By signing up,I agree to Airbnb's 
               <Text style={{fontFamily:'Arial',marginLeft:2,marginRight:5,marginTop:5, fontSize: 15 ,color:'#fd5c63' ,justifyContent:'center',alignItems:'center',textAlign:'center'}}>   
                Terms of Service,Privacy,Policy,Guest Refund Policy,and Host Gurantee Terms. </Text> </Text>          
                 </View>
          </Content>

      </Container>

                </Image>
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

   socials:{
        flex:2,
        flexDirection: 'column',
        justifyContent:'center',

   },

   social:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
   textAlign:'center',
   fontFamily:'Arial',
   fontSize: 13,
   color:'white',


   },

 others:{
        flex:1 ,  
        flexDirection: 'row',       
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'rgba(0, 0, 0, 0.3)',
        
      },


other:{
  fontFamily:'Arial',
  fontSize: 13,
  color:'white',
  margin:5,

},

} );

AppRegistry.registerComponent('design', () => design);