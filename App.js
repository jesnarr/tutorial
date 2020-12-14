
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard 
} from 'react-native'; //components

import * as Animatable from 'react-native-animatable'; // animation

import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';
import Sandbox from './components/sandbox';

const App: () => React$Node = () => {
 
    const [todos, setTodos] = useState([
        { text: 'Study React native', key:'1'},
        { text: 'Study MongoDB', key:'2'},
        { text: 'Study Nodejs', key:'3'},
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        });
    }

  const submitHandler = (text) => {
      if(text.length > 3)
      {
            setTodos((prevTodos) => {
            return [{text:text,key:Math.random().toString()}, ...prevTodos]
           })
      }
      else{
        Alert.alert('Oops!','Todos must be 3 characters long',[
          {text:'Understood',onPress:() => console.log('alert closed')}
          ]);
      }
  
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss(); //keyboard dismiss
    console.log('dismissed keyboard');
    }}>
     <View style={styles.container}>
      <Header />
      <AddTodo submitHandler={submitHandler}/>
         <View style={styles.content}>
                {/* To do form */}
                <View style={styles.list}>
                    {/* display list */}
                        <FlatList 
                            data={todos}
                            renderItem={({ item }) => (
                                    <TodoItem item={item} pressHandler={pressHandler}/>
                             ) }
                        />
                </View>
         </View>

    </View>
  
</TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center'
    },
    content:
    {
        padding:40,
        // backgroundColor: 'pink',
        flex:1
    },
    list:{
      flex: 1,
        marginTop:20,
        // backgroundColor: 'yellow'
    }
  }
);

export default App;
