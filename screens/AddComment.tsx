import * as React from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, View, PointPropType } from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../redux/store';
import axios from 'axios';

const AddComment = (props: any) => {

    const[newComment, setNewComment] = useState(' ');
    const user = useSelector((state: IAppState) => state.user);
    const token = useSelector((state: IAppState) => state.auth.AccessToken);

    //TODO
    //Create comment lambda here -->
    //Needs user pulled from state, specifically { diplayImg, displayName }
    //Needs timeStamp of post passed through props
    const createNewComment = async() => {
        await axios.post(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/${props.timeStamp}`, {
            displayName: user?.displayName,
            displayImg: user?.profileImg,
            comment: newComment
        }, {
            headers: {
                Authorization : token
            },  
        }).then(resp => {
            //Response is a post object containing the newly updated comment array
            props.submitComm();
        })
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
                        <TouchableOpacity style={styles.TouchableOpacity} onPress={() => createNewComment()}>
                            <Text style={styles.text}>Reply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </Card>
    )
}

export default AddComment;

const styles = StyleSheet.create({
    text:{
        fontSize:14,
        color: "white",
    },

    card:{
        flex:1,
        backgroundColor:'rgb(33, 37, 41)',
        borderWidth:4,
        borderColor: 'purple',
        borderRadius:30, 
        paddingBottom:5,
        marginHorizontal:9,
        marginBottom:15,
        justifyContent: 'flex-end'
    },

    postContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom:10,
    },

    inputBox:{
        color: "white",
        fontSize:16,
        flexDirection:"row",
        justifyContent: "center",
        textAlignVertical: 'top',
        marginLeft:10,
        
    },

    buttonContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems: "center",
        paddingLeft:5
    },

    inputContainer:{
        flex:4,
        marginBottom:10,
        backgroundColor:'rgb(42,45,47)',
        borderRadius:20,
        justifyContent:"center",
        alignContent:"center",
    },

    TouchableOpacity:{
        backgroundColor:"purple",
        paddingHorizontal:10,
        paddingVertical:15,
        marginBottom:10,
        borderRadius: 15,
    }
})