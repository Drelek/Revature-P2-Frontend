import * as React from 'react';
import Post from '../models/Post';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useState, useEffect } from 'react';
import { screenWidth } from '../constants/Layout';

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

    const renderProfileImageOrDefault = () => {
        const {displayImg} = props.item;
        console.log(displayImg === undefined);
        if (!displayImg) {
            return (
                <Image
                    source={require('../assets/images/profile-img-placeholder.png')}
                    style={styles.profileImage}
                />
            )
        }else {
            return (
                <Image
                    source={{uri:'https://reactnative.dev/img/tiny_logo.png',}}
                    style={styles.profileImage}
                />
            )
        }
    }

    const renderNotLikeOrLiked = () => {
        if (isLiked){
            return (
            <Image 
                source={require('../assets/images/likeIcon.png')}
                style={styles.heart}
            />)
        } else {
            return(<Image 
                source={require('../assets/images/likedIcon.png')}
                style={styles.heart}
                />)
        }
    }
    const userName = `@${props.item.userName}`;

    return (
        <View
            style={styles.card}
        >
            
            <Card containerStyle={styles.cardActual}> 
                
                <View
                    style={styles.containerHeadOfCard}
                >
                    <View style={styles.imageContainer}>
                        {renderProfileImageOrDefault()}
                    </View>
                    

                    <View style={styles.nameContainer}>
                        <Text
                            style={styles.displayname}
                        >{props.item.displayName}</Text>
                        <Text
                            style={styles.username}
                        >{userName}</Text>
                    </View>
                </View>
                
                <View style={styles.postContainer}>
                    <Text
                    style={styles.postBody}
                >{props.item.postBody}</Text>
                </View>
                

                <View
                    style={styles.containerViewAlignIcons}
                >

                    <Pressable onPress={ () => setLikedState(!isLiked) }>
                        {renderNotLikeOrLiked()}
                    </Pressable>
                    <Pressable 
                        style={{backfaceVisibility: "hidden"}}
                        onPress= { () => redirectToExtendedPostScreen()}>
                        <Image
                            source={require('../assets/images/commentIcon.png')}
                            style={styles.comment}
                        />
                    </Pressable>
                    
                    <Text style={styles.timestamp}>{props.item.timeStamp}</Text>
                </View>            
            </Card>
            
        </View>
    )
}

export default PostCard;

const styles = StyleSheet.create({
    card: {
        padding:10
    },
    cardActual: {
        flex:2, 
        borderRadius:10,
        borderColor: 'purple', 
        borderWidth: 2,
        backgroundColor: 'rgb(33, 37, 41)',
    },
    containerHeadOfCard: {
        flexDirection: "row"
    },

    imageContainer:{
        flex:1
    },

    nameContainer:{
        flex:2,
    },

    postContainer:{
        flex:2,
        borderRadius: 20,
    },

    containerViewAlignIcons: {
        flex:1,
        paddingTop:10,
        flexDirection: "row",
        justifyContent:"space-around",
        borderTopWidth:2,
        borderColor:"purple"
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth:2,
        borderColor:'purple'
    },
    displayname: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white",
        
    },
    username: {
        fontSize: 18,
        color: "white",
    
    },
    postBody: {
        color: "white",
        padding:10,
        // borderColor: 'purple',
        // borderWidth: 2,
        // borderRadius: 20,
    },
    
    heart: {
        width: 25,
        height: 25

    },
    comment: {
        width: 25,
        height: 25,
    },
    
    timestamp: {
        color: "white",
    }


})