import * as React from 'react';
import { Text, TextInput, StyleSheet, Pressable, View, PointPropType } from 'react-native';
import { useState } from 'react';
import { Card } from 'react-native-elements'


const AddComment = (props) => {

    const[newComment, setNewComment] = useState(' ');
    const user = useSelector((state: IAppState) => state.user);

    //TODO
    //Create comment lambda here -->
    //Needs user pulled from state, specifically { diplayImg, displayName }
    //Needs timeStamp of post passed through props
    const createNewComment = async() => {
        await axios.post(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/${}`, {
            headers: {
                Authorization : "TokenToBePulledFromState"
            }, 
                body: {
                    displayName: user?.displayName,
                    displayImg: user?.profileImg,
                    comment: newComment
                }
            
        }).then(resp => {
            //Response is a post object containing the newly updated comment array
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
                <Pressable style={styles.pressable} onPress={() => createNewComment()}        >
                    <Text style={styles.text}>Submit</Text>
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