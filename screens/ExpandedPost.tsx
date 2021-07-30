import React, { useState, useEffect } from 'react';
import { View, FlatList, Pressable, Text, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import IndividualComment from './IndividualComment';
import AddComment from './AddComment';
import { Card } from 'react-native-elements'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/store';

const ExpandedPost: React.FC = (props: any) => {

    const [isLiked, setLikedState] = useState(false);
    const [commentList, setCommentList] = useState([]);
    const token = useSelector((state: IAppState) => state.auth.AccessToken);


    const grabCommentsActual = async () => {
        await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/${props.route.params.dataKey}`, {
            headers: {
                Authorization: token
            }
        }).then(resp => {
            setCommentList(resp.data[0].comments);
            console.log(resp.data);
        })

    }

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

    useEffect(() => {
        grabCommentsActual();
    }, []);

    const { displayName, displayImg, userName, postBody, likes } = props.route.params
    const timeStamp = new Date(Number(props.route.params.dataKey)).toLocaleTimeString() + ' ' + new Date(Number(props.route.params.dataKey)).toLocaleDateString()

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

        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "null"} keyboardVerticalOffset={Platform.select({ ios: 64 })}>
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
                    ListHeaderComponent={() => renderSinglePost()}
                    renderItem={({ item }) => <IndividualComment item={item}></IndividualComment>}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
            {/* <View style={styles.addCommentContainer}> */}
            <AddComment text={"Leave a Reply"} timeStamp={props.route.params.dataKey}></AddComment>
            {/* </View> */}
            {/* </View> */}
        </KeyboardAvoidingView>
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
        flex: 8,
        marginBottom: 10
    },

    addCommentContainer: {
        flex: 1,
        justifyContent: "flex-end"
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