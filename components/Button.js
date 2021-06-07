import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Button = ({text, onPress}) =>
{
    return(
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
<Text style={styles.buttonText}>
{text}
</Text>
        </View>
    </TouchableOpacity>
    )
}
export default Button;
const styles=StyleSheet.create({
button:
{
    marginTop: 20,
    backgroundColor:'#0000FF',
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width:65,
    height: 42,
    alignSelf:'center', 
},
buttonText:
{
color:'white',
textTransform:'uppercase',
fontSize:12,
textAlign:'center',
fontWeight: 'bold',
}
})
