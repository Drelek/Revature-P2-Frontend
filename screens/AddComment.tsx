import * as React from 'react';
import { Text, TextInput, StyleSheet, Pressable, View } from 'react-native';
import { useState } from 'react';

const AddComment = () => {

    const[newComment, setNewComment] = useState(' ');

    const postComment = () => {
        console.log("hello")
        //TODO
        //Post comment to endpoint and refresh screen
    }

    return(
        <View style={styles.card}>
            <View style={styles.inputContainer}> 
                <TextInput
                    placeholder="Add a comment..."
                    placeholderTextColor="white" 
                    style={styles.inputBox}
                    onChangeText={(text)=> setNewComment(text)}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Pressable style={styles.pressable} onPress={() => postComment()}        >
                    <Text style={styles.text}>Submit</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

export default AddComment;

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: "rgb(33, 37, 41)",
        paddingVertical:9,
        marginHorizontal:5,
        fontSize:18,
        fontFamily:"Montserrat",
        textAlign:"center",
        color: "white",
    },
    card: {
        backgroundColor: 'rgb(33, 37, 41)',
        flex:1, 
        margin:0,
        padding:0,
        borderColor: 'purple',
        borderWidth: 3,
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        // borderBottomEndRadius:50,
        // borderBottomStartRadius:50,
    },

    inputContainer: {
        marginBottom:10
    },

    buttonContainer: {
        // justifyContent: ''
    },

    pressable:{
        backgroundColor:"purple",
    },

    text:{
        color:"white",
        fontSize:22,
        paddingTop:5,
        paddingBottom:100,
        fontFamily:"Montserrat",
        textAlign:"center"
    }
})