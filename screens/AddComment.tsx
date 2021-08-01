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
    const [working, setWorking] = useState(false);


    const createNewComment = async() => {
        setWorking(true)
        
        await axios.post(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/${props.timeStamp}`, {
            displayName: user?.displayName,
            displayImg: user?.profileImg,
            comment: newComment
        }, {
            headers: {
                Authorization : token
            },  
        }).then(resp => {
            props.submitComm();
        }).then(resp => {
            setWorking(false);
            setNewComment(' ');
        })
    }


    return(
        <Card containerStyle={styles.card}>
                <View style={styles.postContainer}>
                    <View style={styles.inputContainer}> 
                        <TextInput
                        value={newComment}
                        placeholderTextColor="white" 
                        style={styles.inputBox}
                        onChangeText={(text)=> setNewComment(text)}/>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.TouchableOpacity, working ? styles.working : styles.notWorking]} onPress={() => createNewComment()}>
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
        fontSize:12,
        color: "white",
    },

    card:{
        flex: 1,
        backgroundColor: 'rgb(33, 37, 41)',
        borderWidth: 4,
        borderColor: 'purple',
        borderRadius: 30,
        paddingBottom: 5
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
        marginLeft:10,
        paddingVertical: 15,
        paddingHorizontal: 5,
    },

    buttonContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems: "center",
        // paddingLeft:5,
    
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
    },

    working:{
        backgroundColor:"grey"
    },

    notWorking:{
        backgroundColor:"purple"
    }
})