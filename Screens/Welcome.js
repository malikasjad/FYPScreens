import React from 'react'
import {KeyboardAvoidingView, TextInput} from 'react-native';
import {ScrollView} from 'react-native';
import {View,Text,SafeAreaView,StyleSheet} from 'react-native';
import InputText from '../components/InputText';
import Button from '../components/Button';
const Welcome = () =>

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

    <View style={{justifyContent:'center', marginTop:10,}}>
        <Text style={{alignSelf:'center', fontSize:35}}>
            Welcome, Developer
        </Text>
        <Button
    text="View Form Categories"
    />
    </View>
    <View style={{paddingTop:10}}>
        <Text style={{alignSelf:'center',fontSize:20}}>
            Admin Controls
        </Text>
        <Button
        text="Manage Users"
        />
    </View>
    <View style={{paddingTop:10}}>
        <Text style={{alignSelf:'center',fontSize:20}}>
            Profile Settings
        </Text>
        <Button
        text="Manage Profile"
        />
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


export default Welcome;
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


