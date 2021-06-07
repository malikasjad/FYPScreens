import React from 'react'
import {KeyboardAvoidingView, TextInput} from 'react-native';
import {ScrollView} from 'react-native';
import {View,Text,SafeAreaView,StyleSheet} from 'react-native';
import InputText from '../components/InputText';
import Button from '../components/Button';
const Login = () =>

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

<View style={styles.userView}>
    <Text style={styles.userText}>
        Username
    </Text>
    <InputText
       placeholder="Username"
       autoCapitalize="none"
    /> 
</View>
<View style={styles.passView}>
    <Text style={styles.passText}>
        Password
    </Text>
    <InputText
       placeholder="Password"
       autoCapitalize="none"
    />
</View>
<View style={{marginTop:20,}}>
    <Button
    text="Login"
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


export default Login;
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
userView:
{
    marginTop:30,
    flexDirection:'column',
},
userText:
{
    marginTop:20,
    alignSelf:'center'
},
passText:
{
    marginTop:20,
    alignSelf:'center'
}
    }
)


