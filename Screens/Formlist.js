import React from 'react'
import { KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {View,Text,SafeAreaView,StyleSheet} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';

import Button from '../components/Button';
const Formlist = () =>

{

    return (
        <KeyboardAvoidingView style={{flex:1}}>
<ScrollView style={{backgroundColor:'#FFFFFF'}}>

    
<View style={styles.headerView}>
    <Text style={styles.headerText}>
        Bureau of Satistics Punjab
    </Text>

    <Text style={styles.lineText}>
        Government of the Punjab
    </Text>
</View>

<View>
    <Text style={{color:'#3AEE6D',fontSize:20, padding:10}}>
        Forms List
    </Text>
</View>

<View style={{marginLeft:25,marginTop:20,}}>
    <TouchableOpacity>
        <Text>
       1. Goshwara Jinswar
        </Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Text> 
       2. Annual Land Use
        </Text>
    </TouchableOpacity>
</View>


<View style={{backgroundColor:'#FFFF00', height:40,justifyContent:'center',
  marginTop:250,}}><Text style={{color:'#000000', alignSelf:'center'}}>
   @Bureau of Statistics Government of Punjab 
      </Text>
</View>
</ScrollView>
        </KeyboardAvoidingView>
    )
}


export default Formlist;
const styles=StyleSheet.create(
    {
        headerView:
        {
            width:360,
            height:80,
            backgroundColor:'#0000FF',
    marginTop:30,
  
        },
        headerText:
        {
            alignSelf:'center',
            fontSize:26,
            color:'#FFFFFF',
        },
    lineText:
    {
        alignSelf:'center',
color:'#FFFFFF',
    },

    }
)


