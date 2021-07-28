import React, { useState, useEffect } from 'react';
import { View, FlatList, Pressable, Text, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import IndividualComment from './IndividualComment';
import AddComment from './AddComment';
import { Card } from 'react-native-elements'

const ExpandedPost: React.FC = (props: any) => {
    // const[timeStamp, setTimeStamp] = useState(props);
    //TODO 
    //Use timestamp to pull post in question from database
    const [isLiked, setLikedState] = useState(false);
    const [commentList, setCommentList] = useState([]);

    const renderNumOfLikes = (likes: number[]) => {
        if (likes.length) {
            return likes.length;
        } else {
            return '';
        }
    }

    const renderProfileImageOrDefault = (displayImg: string) => {
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

    const mergePostCommentData = () => {
        setCommentList([props.route.params, ...commentList]);
    }

    useEffect(() => mergePostCommentData(), []);

    const { displayName, displayImg, userName, postBody, likes, timeStamp } = props.route.params;

    const renderSinglePost = () => {

        return (
            <View style={styles.postContainer}>

                <Card containerStyle={styles.cardActual}>

                    <View style={styles.headerContainer}>
                        <View>{renderProfileImageOrDefault(displayImg)}</View>

                        <View style={styles.infoContainer}>
                            <View><Text style={styles.displayName}>{displayName}</Text></View>
                            <View><Text style={styles.userName}>{`@${userName}`}</Text></View>
                        </View>

                    </View>

                    <View style={styles.bodyContainer}><Text style={styles.postBody}>{postBody}</Text></View>

                    <View style={styles.footerContainer}>
                        <View style={styles.likesContainer}>
                            <Pressable onPress={() => setLikedState(!isLiked)}>
                                {renderNotLikeOrLiked()}
                            </Pressable>

                            <Text style={styles.likesText}>{renderNumOfLikes(likes)}</Text>
                        </View>

                        <View style={styles.timeStampContainer}><Text style={styles.timeStamp}>{timeStamp}</Text></View>
                    </View>

                </Card>
            </View>
        )
    }

    return (

        <View style={styles.container}>
            {/* <Pressable onPress={ () => mergePostCommentData()}>
                    <Text style={{color:"white"}}>HELLO</Text>
                </Pressable>
                <Pressable onPress={ () => console.log(commentList)}>
                    <Text style={{color:"white"}}>EAZYMONEY</Text>
                </Pressable> */}
            {/* <View style={styles.inner}> */}
            <View style={styles.commentsContainer}>

                <FlatList

                    data={commentList}
                    renderItem={({ item, index }) => {
                        if (index !== 0) {
                            return (<IndividualComment item={item}></IndividualComment>)
                        } else {
                            return (renderSinglePost())
                        }
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>

            <View style={styles.addCommentContainer}>
                <AddComment></AddComment>
            </View>
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    inner: {
        flex: 1,
        justifyContent: "flex-end",
    },

    postContainer: {
        flex: 2,
        flexDirection: 'column'
    },

    cardActual: {
        borderWidth: 5,
        borderColor: "purple",
        borderRadius: 10,
        backgroundColor: "rgb(33, 37, 41)"
    },

    headerContainer: {
        flexDirection: "row",
        marginBottom: 10
    },

    profileImage: {
        height: 80,
        width: 80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "purple",
        marginRight: 15
    },

    infoContainer: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "center"
    },

    bodyContainer: {
        flex: 1
    },

    footerContainer: {
        flex: 1,
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 2,
        borderColor: "purple",
    },

    likesContainer: {
        flex: 1,
        flexDirection: "row",
    },

    blank: {
        flex: 1,
    },

    timeStampContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    commentsContainer: {
        flex: 5,
        marginBottom: 10
    },

    addCommentContainer: {
        flex: 1,
    },

    displayName: {
        color: "white",
        fontFamily: "BadScript",
        fontSize: 20
    },

    userName: {
        color: "white",
        fontFamily: "BadScript"
    },

    postBody: {
        color: "white",
        marginBottom: 10,
        fontSize: 16,
        fontFamily: "Montserrat"
    },

    defaultProfileImage: {
        marginTop: 5,
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'purple',
    },

    heart: {
        width: 25,
        height: 25
    },

    timeStamp: {
        color: "white",
    },

    likesText: {
        color: "white",
        marginLeft: 10
    }
})
export default ExpandedPost;