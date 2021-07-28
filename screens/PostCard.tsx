import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Card } from 'react-native-elements'


const PostCard = (props: any) => {

    const [isLiked, setLikedState] = useState(false);
    const [numLikes, setNumLikes] = useState(0);

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

    const renderNumOfComments = () => {
        const { comments } = props.item;
        if (comments.length) {
            return comments.length;
        } else {
            return '';
        }
    }

    const renderNumOfLikes = () => {
        const { likes } = props.item;
        if (likes.length) {
            return likes.length;
        } else {
            return '';
        }
    }

    const renderProfileImageOrDefault = () => {
        const { displayImg } = props.item;
        if (!displayImg) {
            return (
                <Image
                    source={require('../assets/images/illuminati.png')}
                    style={styles.defaultProfileImage}
                />
            )
        } else {
            return (
                <Image
                    source={{ uri: `${displayImg}` }}
                    style={styles.profileImage}
                />
            )
        }
    }

    const renderNotLikeOrLiked = () => {
        if (isLiked) {
            return (
                <Image
                    source={require('../assets/images/likeIcon.png')}
                    style={styles.heart}
                />)
        } else {
            return (<Image
                source={require('../assets/images/likedIcon.png')}
                style={styles.heart}
            />)
        }
    }


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
                            style={styles.displayName}
                        >{props.item.displayName}</Text>
                        <Text
                            style={styles.username}
                        >{`@${props.item.userName}`}</Text>
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
                    <View style={styles.likesContainer}>
                        <Pressable onPress={() => setLikedState(!isLiked)}>
                            {renderNotLikeOrLiked()}
                        </Pressable>

                        <Text style={styles.likesText}>{renderNumOfLikes()}</Text>
                    </View>

                    <View style={styles.commentsContainer}>
                        <Pressable
                            onPress={() => redirectToExtendedPostScreen()}>
                            <Image
                                source={require('../assets/images/commentIcon.png')}
                                style={styles.comment}
                            />
                        </Pressable>
                        <Text style={styles.likesText}>
                            {renderNumOfComments()}
                        </Text>
                    </View>

                    <View style={styles.timeStampContainer}>
                        <Text style={styles.timestamp}>{props.item.timeStamp}</Text>
                    </View>

                </View>
            </Card>

        </View>
    )
}

export default PostCard;

const styles = StyleSheet.create({
    card: {
        padding: 10,
    },
    cardActual: {
        flex: 2,
        borderRadius: 10,
        borderColor: 'purple',
        borderWidth: 2,
        backgroundColor: 'rgb(33, 37, 41)',
    },
    containerHeadOfCard: {
        flexDirection: "row"
    },

    imageContainer: {
        flex: 1,
    },

    nameContainer: {
        flex: 2,
    },

    postContainer: {
        flex: 2,
        borderRadius: 20,
    },

    containerViewAlignIcons: {
        flex: 1,
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 2,
        borderColor: "purple"
    },
    defaultProfileImage: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'purple',
        backgroundColor: 'purple'
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'purple',
    },
    displayName: {
        fontSize: 22,
        color: "white",
        fontFamily: "BadScript"
    },
    username: {
        fontSize: 16,
        color: "white",
        fontFamily: "BadScript"
    },
    postBody: {
        color: "white",
        padding: 10,
        fontFamily: "Montserrat"
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
        fontFamily: "Montserrat"
    },

    likesText: {
        color: "white",
        paddingLeft: 10,
        fontFamily: "Montserrat"
    },

    likesContainer: {
        flex: 1,
        flexDirection: "row",
    },

    commentsContainer: {
        flex: 1,
        flexDirection: "row"
    },

    timeStampContainer: {
    },
})