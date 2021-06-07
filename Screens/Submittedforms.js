import React from 'react'
import { KeyboardAvoidingView} from 'react-native';
import {ScrollView} from 'react-native';
import {View,Text,SafeAreaView,StyleSheet} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';

import Button from '../components/Button';
const Submittedforms = () =>

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
        Submitted Forms
    </Text>
</View>


<Card>
    <View style={{ width:350,flexDirection:'row',height:70,justifyContent:'center'}}>
<View>
<Text style={{fontSize:19,alignSelf:'center'}}>
    Date
</Text>
</View>
<View>
<Text style={{marginLeft:10,}}>
2021-02-21
</Text>
</View>

<View style={{flexDirection:'row', marginLeft:50}}>
<Button
text="edit"
/>
<Button
text="delete"
/>
</View>
</View>
  </Card>

 < Card>
    <View style={{ width:350,flexDirection:'row',height:70,justifyContent:'center'}}>
<View>
<Text style={{fontSize:19,alignSelf:'center'}}>
    Date
</Text>
</View>
<View>
<Text style={{marginLeft:10,}}>
2021-04-12
</Text>
</View>

<View style={{flexDirection:'row', marginLeft:50}}>
<Button
text="edit"
/>
<Button
text="delete"
/>
</View>
</View>
  </Card>


<View style={{backgroundColor:'#FFFF00', height:40,justifyContent:'center',
  marginTop:250,}}><Text style={{color:'#000000', alignSelf:'center'}}>
   @Bureau of Statistics Government of Punjab 
      </Text>
</View>
</ScrollView>
        </KeyboardAvoidingView>
    )
}


export default Submittedforms;
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


