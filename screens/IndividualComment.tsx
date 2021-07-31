import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/store';

const IndividualComment = (props: any) => {
    const item = {
        displayImg: props.item.M.displayImg.S,
        comment: props.item.M.comment.S,
        displayName: props.item.M.displayName.S,
        commentStamp: props.item.M.commentStamp.N,
        timeStamp: props.timeStamp
    }
    
    const token = useSelector((state: IAppState) => state.auth.AccessToken);
    const user = useSelector((state: IAppState) => state.user);
    const {displayImg, comment, displayName, commentStamp, timeStamp} = item
    const adaptedCommentStamp = new Date(Number(commentStamp)).toLocaleTimeString() + ' ' + new Date(Number(commentStamp)).toLocaleDateString()



    const determineIfCurrentUser = () => {
        console.log(displayName, user?.displayName, timeStamp, commentStamp);
        if(user?.displayName == displayName) {
            return true;
        } else {
            return false;
        }
    }

    //Delete a comment
    //Requires timeStamp of post and commentStamp of the comment
    const deleteComment = async() => {
        console.log(timeStamp, commentStamp)
        await axios.delete(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/${timeStamp}/${commentStamp}`, {
            headers: {
                Authorization: token
            }
        }).then(resp => {
            //Response returns deleted comment...
            console.log(resp.data[0].comments);
            props.deleteComment();    
        })

        
    }
    
    return(

        <Card
            containerStyle={styles.card}
        >
            <View
                style={styles.container}
            >
                <Image
                    source={{uri:`${displayImg}`}}
                    style={styles.imageContainer}
                />
            </View>

            <View style={styles.dataContainer}>

                <View>
                    <View style={styles.nameTimeContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.displayName}>{displayName}</Text>
                        </View>
                        <View>
                        { determineIfCurrentUser() &&
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Pressable 
                                onPress= { () => deleteComment()}>
                             <Image
                                source={require('../assets/images/trash-can-icon.png')}
                                style={styles.trashCanContainer}
                             />
                            </Pressable> 
                        </View>
                        }
                        </View>
                        
                </View>
                
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeStamp}>{adaptedCommentStamp}</Text>
                    </View>
                </View>
               
               <View style={styles.commentContainer}>
                    <Text style={styles.comment}>{comment}</Text>
               </View>

            </View>
            
            

        </Card>
    )
}
export default IndividualComment;

const styles = StyleSheet.create({
    card: {
        borderColor: 'purple', 
        borderWidth: 2,
        borderRadius:10,
        backgroundColor:"rgb(33, 37, 41)"
    },

    container: {
        flex: 1,
        flexDirection:"row",
        borderRadius:2,
        borderColor: 'purple',
    },    

    imageContainer: {
        flex:1,
    },

    dataContainer: {
        flex:4,
        flexDirection:"column"
    },

    nameTimeContainer: {
        flex:1,
        flexDirection:"row",
        justifyContent: "space-around",
        marginBottom:5,
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor: 'purple'
    },
    trashCanContainer: {
        flex: 1,
        width: 20,
        height: 20
    },

    nameContainer:{
        flex:1
    },

    timeContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end"
    },

    commentContainer:{
        flex:1
    },

    comment: {
        fontSize: 14,
        color: "white",
    },

    displayName: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold",
    },

    timeStamp: {
        fontSize: 14,
        color: "white",
    },
    
    defaultProfileImage:{
        height:40,
        width:40,
        borderRadius: 100,
        backgroundColor:'purple',
        borderWidth:2,
        borderColor: 'purple',
    },
    profileImage: {
        height:40,
        width:40,
        borderRadius: 100,
        backgroundColor:'purple',
        borderWidth:2,
        borderColor: 'purple',
    },
})

