import React, { useState, useEffect }  from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import Profile from './Profile';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/store';

const PostCard = (props: any) => {
    const navigation = useNavigation();
    
    const userName = useSelector((state: IAppState) => state.user?.userName);
    const token = useSelector((state: IAppState) => state.auth.AccessToken);
    const item = {
        comments: props.item.comments.L,
        timeStamp: props.item.dataKey.S,
        dataType: props.item.dataType.S,
        displayImg: props.item.displayImg.S,
        displayName: props.item.displayName.S,
        likes: props.item.likes.SS || [],
        postBody: props.item.postBody.S,
        userName: props.item.userName.S
    }
    const[likes, setLikes] = useState(item.likes.length);

    const[isLiked, setLikedState] = useState(item.likes.includes(userName));

    // useEffect(() => {
    //     grabUserData();
    // }, [])
    //Storing state for redirecting to Profile page
    const[profileInfo, setProfileInfo] = useState({
        displayName: item?.displayName,
        userName: item?.userName,
        email: "",
        profileImg: ""
    })

    

    //Move this functionality to Profile Screen
    //Grab user specific data: { email, profileImg}
    // const grabUserData = async() => {
    //     await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/${props.item.userName}`, {
    //         headers: {
    //             Authorization: token
    //         }
    //     }).then(resp => {
    //         setProfileInfo({
    //             ...profileInfo,
    //             email : resp.data[0].email,
    //             profileImg : resp.data[0].profileImg
    //         })
    //     })
    // }

    //On press of delete post 
    //Will need to refresh feeds at their respective sources
    const deletePost = async() => {
        await axios.delete(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/${item.timeStamp}`, {
            headers: {
                Authorization : token
            }
        }).then(resp => {
            //Response will return deleted post...
        })

    }

    const toggleLike = async () => {
        try {
            await axios.patch(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/${item.timeStamp}`, {
                isLiked: isLiked,
                userName: userName,
                timeStamp: item.timeStamp
            }, {
                headers: {
                    Authorization : token
                }
            })
        } catch (err) {
            console.log(err);
            console.log(err.response.data);
        }

        if (isLiked) setLikes(likes-1);
        else setLikes(likes+1);
        
        setLikedState(!isLiked);

    }
    
    const redirectToExtendedPostScreen = () => {
        const {item} = props
        navigation.navigate("ExpandedPost", item)
    }

    const renderNumOfComments = () => {
        const {comments} = item;
        if(comments.length){
            return comments.length;
        } else {
            return '';
        }
    }

    const renderNumOfLikes = () => {
        if(likes - 1){
            return likes - 1;
        } else {
            return ''; 
        }
    }

    const renderProfileImageOrDefault = () => {
        const {displayImg} = item;
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
                    source={{uri:`${displayImg}`}}
                    style={styles.profileImage}
                />
            )
        }
    }

    const renderNotLikeOrLiked = () => {
        if (isLiked){
            return (
            <Image 
                source={require('../assets/images/likedIcon.png')}
                style={styles.heart}
            />)
        } else {
            return(<Image 
                source={require('../assets/images/likeIcon.png')}
                style={styles.heart}
                />)
        }
    }

    const postTime = new Date(Number(item.timeStamp));
    const timeText = `${postTime.getHours()}:${postTime.getMinutes()} ${postTime.getDate()}`

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
                        <Pressable
                            onPress={() => navigation.navigate("Profile", profileInfo)}
                        >
                            <Text
                                style={styles.displayName}
                            >{item.displayName}</Text>
                        </Pressable>

                        
                        <Text
                            style={styles.username}
                        >{`${item.userName}`}</Text>
                    </View>
                </View>
                
                <View style={styles.postContainer}>
                    <Text
                    style={styles.postBody}
                >{item.postBody}</Text>
                </View>
                

                <View
                    style={styles.containerViewAlignIcons}
                >
                    <View style={styles.likesContainer}>
                        <Pressable onPress={ toggleLike }>
                        {renderNotLikeOrLiked()}
                        </Pressable>

                        <Text style={styles.likesText}>{renderNumOfLikes()}</Text>
                    </View>
                    
                    <View style={styles.commentsContainer}>
                       <Pressable 
                        onPress= { () => redirectToExtendedPostScreen()}>
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
                        <Text style={styles.timestamp}>{postTime.toLocaleTimeString() + ' ' + postTime.toLocaleDateString()}</Text>
                    </View>
                </View>            
            </Card>
            
        </View>
    )
}

export default PostCard;

const styles = StyleSheet.create({
    card: {
        padding:10,
    },
    cardActual: {
        flex:2, 
        borderRadius:10,
        borderColor: 'purple', 
        borderWidth: 2,
        backgroundColor: 'rgb(33, 37, 41)',
    },
    containerHeadOfCard: {
        flex: 1,
        flexDirection: "row",
        marginBottom:10
    },

    imageContainer:{
        flex:1,
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
    defaultProfileImage: {
        marginTop:5,
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth:2,
        borderColor:'purple',
        backgroundColor:'purple'
    },
    profileImage: {
        marginTop:5,
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth:2,
        borderColor:'purple',
    },
    displayName: {
        fontSize: 22,
        color: "white",
        fontFamily:"BadScript"
    },
    username: {
        fontSize: 16,
        color: "white",
        fontFamily:"BadScript",
    },
    postBody: {
        color: "white",
        fontFamily: "Montserrat",
        marginBottom:10
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
        fontFamily:"Montserrat"
    },

    likesText: {
        color: "white",
        paddingLeft:10,
        fontFamily:"Montserrat"
    },

    likesContainer:{
        flex:1,
        flexDirection: "row",
    },

    commentsContainer:{
        flex: 1,
        flexDirection: "row"
    },
    
    timeStampContainer:{
    },
})