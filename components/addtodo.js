import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button,View,Alert } from 'react-native'

export default function AddTodo({submitHandler}){
    const [text, setText] = useState('');
    const changeHandler = (val) => {
            setText(val);
    };
    return (
        <View style={styles.header}>
                <TextInput 
                style={styles.input}
                placeholder='New todo...'
                onChangeText={changeHandler}
                
                 />
                 <Button onPress={() => submitHandler(text)} title='Add todo' color='#1d518b'/>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        input:{
            marginBottom:10,
            paddingHorizontal:8,
            paddingVertical:6,
            borderBottomWidth:1,
            borderBottomColor:'#ddd'

        }
    }
);