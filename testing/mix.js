/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

 'use strict';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

export default class testing extends Component {
  render() {
    return (

  <View style={{flex: 1}}>
        
        <Image
        source={{uri: 'http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/08/Black-Background-12.jpg'}}
        style={styles.container}>

          <Image
        source={{uri: 'https://static.pexels.com/photos/24353/pexels-photo.jpg'}}
        style={styles.profile} />

                   <Text >CRASH GUARD</Text>
           <View style={styles.first}>

                   <View style={styles.bars1}> 
                       <Image
        source={{uri: 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png'}}
        style={styles.Details} />       
                       <Text style={{textAlign :'center' , marginTop:12 ,fontSize:12 ,color:'white' }}>Set up my Details</Text>
                    </View>

                    <View style={styles.bars2}>
                    <Image
        source={{uri: 'http://www.icedamremovalguys.com/wp-content/uploads/Icon-Document01-Grey.png'}} 
        style={styles.Details} /> 
                       <Text style={{textAlign :'center' , marginTop:12 ,fontSize:12 ,color:'white' }}>Accident History</Text>
                    </View>
            </View>

              <View style={styles.second}>

                    <View  style={styles.bars3}>
                    <Image
        source={{uri: 'http://www.kktravels.com/front_responsive/images/cab_icon.png'}}
        style={styles.Details} /> 
                       <Text style={{margin:10 ,textAlign:'center',fontSize:12,color:'white' }}>Towing Required ?</Text>
                    </View>

                    <View  style={styles.bars4}>
                    <Image
        source={{uri: 'http://supercool-southport.com.au/wp-content/uploads/2015/03/Phone-Icon.png'}}
        style={styles.Details} /> 
                        <Text style={{textAlign :'center' , margin:8 ,fontSize:12 ,color:'white'}}>About Us</Text>
                    </View>
              </View>

              <View style={styles.third}>
                  <View  style={styles.bars5}>
                  <Image
        source={{uri: 'https://cdn0.iconfinder.com/data/icons/car-crash/500/accident-128.png'}}
        style={styles.accident} /> 
                      <Text style={{textAlign :'center' , margin:10,fontSize:12 ,color:'white' }}>Met an Accident</Text>
                      </View>
               </View>
        </Image> 
         
        
    </View>

       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },


   backgroundImage:{
      flex:1,
      width: windowSize.width,
      flexDirection:'row',
      flexWrap: 'wrap' ,
      backgroundColor:'black',
      height: windowSize.height,
   },


 profile:{
     height: 170,
    borderRadius:100,
    width: 170,
    margin:10,
    borderWidth:6,
    borderColor:'white',
   },


  Details:
  {
      flex:0.2,
      flexWrap: 'wrap',
       resizeMode: 'cover',
       height:30,
       width:50,
       alignItems:'center',
       justifyContent:'center',
       marginLeft:30,
       marginTop:8,   
  },


  accident:{
   flex:0.2,
      flexWrap: 'wrap',
       resizeMode: 'cover',
       height:30,
       width:50,
       alignItems:'center',
       justifyContent:'center',
       marginLeft:110,
       marginTop:8,   


  },


    first:{
     flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding:20,

    },

    second:{
      flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding:20,
      
    },

    third:{
      flex:2,
    flexDirection: 'row',
    justifyContent: 'center',
    padding:10,


    },


    bars1:{
      flex:1 ,
        backgroundColor:'#56A234', 
        justifyContent:'center',
        marginTop:10,
       marginRight:10,
        padding:20,
        borderWidth: 3,
        borderColor: 'grey',
        width: 100, height: 100,
        
    },
    bars2:{
        flex:1 ,
        backgroundColor:'#F0DA0D',           
        justifyContent:'center',
        marginTop:10,
       
        padding:20,
        borderWidth: 3,
        borderColor: 'grey',
        width: 100, height: 100,
        
    },
    bars3:{
      flex:1 ,
        backgroundColor:'#34BBF1',           
        justifyContent:'center',
       marginTop:10,
       marginRight:10,
        padding:10,
        borderWidth: 3,
        borderColor: 'grey',
        width: 100, height: 100,
        
        
    },
    bars4:{
      flex:1 ,
        backgroundColor:'#E14E28',
        marginTop:10,
        justifyContent:'center',
        padding:10,
        borderWidth: 3,
        borderColor: 'grey',
        width: 100, height: 100,
        
    },
    bars5:{
      flex:1 ,
        backgroundColor:'#C317E7',           
        marginTop:20,
        marginRight:10,
        marginLeft:10,
        justifyContent:'center',
        padding:10,
        borderWidth: 4,
        borderColor: 'grey',
        width: 100, height: 90,
    },
    


});

AppRegistry.registerComponent('testing', () => testing);
