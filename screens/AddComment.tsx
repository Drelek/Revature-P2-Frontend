import * as React from 'react';
import { Text, TextInput, StyleSheet, Pressable, View, PointPropType } from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-elements'


const AddComment = (props) => {

    const[newComment, setNewComment] = useState(' ');

    const postComment = () => {
        console.log("hello")
        //TODO
        //Post comment to endpoint and refresh screen
    }

    return(
        <Card containerStyle={styles.card}>
                <View style={styles.postContainer}>
                    <View style={styles.inputContainer}> 
                        <TextInput
                        placeholder={props.text}
                        placeholderTextColor="white" 
                        style={styles.inputBox}
                        onChangeText={(text)=> setNewComment(text)}/>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.pressable} onPress={() => postComment()}>
                            <Text style={styles.text}>Reply</Text>
                        </Pressable>
                    </View>
                </View>
            </Card>
    )
}

export default AddComment;

const styles = StyleSheet.create({
    container:{
        marginTop:0
    },

    text:{
        fontSize:14,
        color: "white",
    },

    card:{
        backgroundColor:'rgb(33, 37, 41)',
        borderWidth:4,
        borderColor: 'purple',
        borderRadius:30, 
        paddingBottom:5
    },

    postContainer: {
        flexDirection:'row',
        justifyContent: 'center',
    },

    inputBox:{
        color: "white",
        fontSize:16,
        flexDirection:"row",
        justifyContent: "center",
        textAlignVertical: 'top',
        paddingVertical:15,
        paddingHorizontal:5,
        marginLeft:10,
        
    },

    buttonContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems: "center",
    },

    inputContainer:{
        flex:4,
        marginBottom:10,
        backgroundColor:'rgb(42,45,47)',
        borderRadius:20,
        justifyContent:"center",
        alignContent:"center",
    },

    pressable:{
        backgroundColor:"purple",
        paddingHorizontal:10,
        paddingVertical:15,
        marginBottom:10,
        borderRadius: 15,
    }
})