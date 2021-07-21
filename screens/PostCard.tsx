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
            <View
                style= {{flex:0.3, borderTopLeftRadius:20}}
            >
            <Card>
                
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
                >{props.postBody}</Text>
                <View
                    style={styles.containerViewAlignIcons}
                >

                    <Pressable onPress={ () => setLikedState(true) }>
                        <Image 
                            source={require('../assets/images/unliked-post.png') }
                            style={styles.heart}
                        />
                    </Pressable>
                    <Pressable onPress= { () => redirectToExtendedPostScreen()}>
                        <Image
                            source={require('../assets/images/comment-icon.png')}
                            style={styles.comment}
                        />
                    </Pressable>
                    
                    <Text>{props.timeStamp}</Text>
                </View>            
            </Card>
            </View>
        </View>
    )
}

export default PostCard;

const styles = StyleSheet.create({
    card: {
        width: 290,
        //Caution, height attribute controls spacing between cards
        height: 210,
        borderRadius: 15,
        flex: 1
        
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 25,
    },
    displayname: {
        fontWeight: "bold",
        fontSize: 25
    },
    username: {
        fontSize: 18
    },
    postBody: {
        width: 225,
        height: 50,
        borderColor: 'purple',
        borderWidth: 2,
    },
    containerViewAlignIcons: {
        flexDirection: "row"
    },
    heart: {
        width: 30,
        height: 30

    },
    comment: {
        width: 30,
        height: 30,
        borderLeftWidth: 10
    },
    containerHeadOfCard: {
        flexDirection: "row"
    },
    timestamp: {

    }


})