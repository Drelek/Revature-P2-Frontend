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
                    <View>
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
        width: screenWidth,
        // height: 210,
        flex: 1,
    },
    cardActual: {
        flex:1, 
        borderRadius:10,
        borderColor: 'purple', 
        borderWidth: 2,
        backgroundColor: 'rgb(33, 37, 41)'
    },
    containerHeadOfCard: {
        flexDirection: "row"
    },

    nameContainer:{

    },
    postContainer:{

    },

    containerViewAlignIcons: {
        flexDirection: "row",
        paddingVertical: 9,
        justifyContent:"space-evenly"
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
    
    heart: {
        width: 30,
        height: 30

    },
    comment: {
        width: 30,
        height: 30,
    },
    
    timestamp: {
        color: "white",
    }


})