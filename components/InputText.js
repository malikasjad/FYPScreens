import React from 'react';
import { TextInput , StyleSheet, Dimensions, View, Text} from 'react-native';
let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
const InputText=({text,placeholder})=> {
    return (
        <View style={styles.inputCont}>
            <Text style={styles.txt}>
                {text}
            </Text>
            <TextInput
            placeholder={placeholder}
            style={styles.input} />
        </View>
    );
}

export default InputText;
const styles = StyleSheet.create({
    inputCont:{
        width:"80%",
        fontSize:19,
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        borderBottomWidth:1,
    },
    input:{
        marginLeft:width*0.4,
    },
    txt:{
        color:"black"
    }
})