import * as React from 'react';
import Post from '../models/Post';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useState, useEffect } from 'react';
import Likey from '../assets/images/liked-post.png'
import NotLikey from '../assets/images/unliked-post.png'
import CommentIcon from '../assets/images/comment-icon.png'
import ProfileImgPlaceholder from '../assets/images/profile-img-placeholder.png'

const PostCard = (props: any) => {

    const[isLiked, setLikedState] = useState(false);
    const[numLikes, setNumLikes] = useState(0);

    useEffect(() => {
        //TODO
        //Pull the post array based on timestamp --> Iterate over array --> log number of likes

    })


    const fetchLikedState = () => {
        //TODO
    }

    const redirectToExtendedPostScreen = () => {
        //TODO
        
    }

    return (
        <View
            style={styles.card}
        >
            
            <Card containerStyle={styles.cardActual}> 
                
                <View
                    style={styles.containerHeadOfCard}
                >
                    <Image
                        source={require('../assets/images/profile-img-placeholder.png')}
                        style={styles.profileImage}
                    />

                    <View>
                        <Text
                            style={styles.displayname}
                        >HolyGuack</Text>
                        <Text
                            style={styles.username}
                        >@guackholy</Text>
                    </View>
                </View>
                

                <Text
                    style={styles.postBody}
                >{props.item.postBody}</Text>

                <View
                    style={styles.containerViewAlignIcons}
                >

                    <Pressable onPress={ () => setLikedState(true) }>
                        <Image 
                            source={require('../assets/images/unliked-post.png') }
                            style={styles.heart}
                        />
                    </Pressable>
                    <Pressable 
                        style={{backfaceVisibility: "hidden"}}
                        onPress= { () => redirectToExtendedPostScreen()}>
                        <Image
                            
                            source={require('../assets/images/comment-icon-transparent.png')}
                            style={styles.comment}
                        />
                    </Pressable>
                    
                    <Text>{props.item.timeStamp}</Text>
                </View>            
            </Card>
            
        </View>
    )
}

export default PostCard;

const styles = StyleSheet.create({
    card: {
        width: 360,
        //Caution, height attribute controls spacing between
        height: 210,
        borderRadius: 15,
        flex: 1,
    },
    cardActual: {
        flex:1, 
        borderTopLeftRadius:20, 
        borderColor: 'plum', 
        borderWidth: 1,
        borderTopRightRadius:20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: 'rgb(33, 37, 41)'
        
    },

    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 25,
    },
    displayname: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white",
        marginLeft: 15
    },
    username: {
        fontSize: 18,
        color: "white",
        marginLeft: 15
    },
    postBody: {
        width: 295,
        height: 50,
        backgroundColor: "rgb(220,220,220)",
        paddingTop: 15,
        borderColor: 'purple',
        borderWidth: 2,
    },
    containerViewAlignIcons: {
        flexDirection: "row",
        paddingVertical: 9,
        justifyContent:"space-evenly"
    },
    heart: {
        width: 30,
        height: 30

    },
    comment: {
        width: 30,
        height: 30,
        
        
    },
    containerHeadOfCard: {
        flexDirection: "row"
    },
    timestamp: {

    }


})