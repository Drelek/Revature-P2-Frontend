import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, FlatList, Pressable, Text, StyleSheet, Image, ScrollView} from 'react-native';
import IndividualComment from './IndividualComment';
import AddComment from './AddComment';
import { Card } from 'react-native-elements'

const ExpandedPost: React.FC = (props:any) => {
    // const[timeStamp, setTimeStamp] = useState(props);
    //TODO 
    //Use timestamp to pull post in question from database
    const [commentList, setCommentList]  = useState(
    [{
        displayName:"Jesus",
        profileImg:"",
        timeStamp: "12/1/21 6:30pm",
        comment: "In this farewell, there's no blood, there's no alibi, 'cause I've drawn regret from the truth of a thousand lies, so let mercy come and wash away!!!!!!!!!!!!! WHAT I'VE DONEEEEEEEEEEEEEE" 
    },
    {
        displayName:"Jesus",
        profileImg:"",
        timeStamp: "12/1/21 6:30pm",
        comment: "A comment over there"
    },
    {
        displayName:"Jesus",
        profileImg:"",
        timeStamp: "12/1/21 6:30pm",
        comment: "A comment everywhere"
    },
    {   
        displayName:"Jesus",
        profileImg:"",
        timeStamp: "12/1/21 6:30pm",
        comment: "In this farewell, there's no blood, there's no alibi, 'cause I've drawn regret from the truth of a thousand lies, so let mercy come and wash away!!!!!!!!!!!!! WHAT I'VE DONEEEEEEEEEEEEEE" 
    },
    {
        displayName:"Jesus",
        profileImg:"",
        timeStamp: "12/1/21 6:30pm",
        comment: "A comment over there"
    },
    {
        displayName:"Jesus",
        profileImg:"",
        timeStamp: "12/1/21 6:30pm",
        comment: "A comment everywhere"
    },
    {
        displayName:"Jesus",
        profileImg:"",
        timeStamp: "12/1/21 6:30pm",
        comment: "In this farewell, there's no blood, there's no alibi, 'cause I've drawn regret from the truth of a thousand lies, so let mercy come and wash away!!!!!!!!!!!!! WHAT I'VE DONEEEEEEEEEEEEEE" 
    },
    {
        displayName:"Jesus",
        profileImg:"",
        timeStamp: "12/1/21 6:30pm",
        comment: "A comment over there"
    },
    {
        displayName:"Jesus",
        profileImg:"",
        timeStamp: "12/1/21 6:30pm",
        comment: "A comment everywhere"
    }
    ]);


    const mergePostCommentData= () => {
        const newComment = {
            displayName:"Jesus",
            profileImg:"",
            timeStamp: "12/1/21 6:30pm",
            comment:"this is kai"
        }
        setCommentList([newComment])
    }

    // useEffect(()=> mergePostCommentData());

    const {displayName, displayImg, userName, postBody, likes,timeStamp} = props.route.params
    const renderSinglePost = (item:any) => {
        
        return (
        <View style={styles.postContainer}>

                <Card containerStyle={styles.cardActual}>

                    <View style={styles.headerContainer}>
                        <View><Image
                                source={{uri:`${displayImg}`}}
                                style={styles.profileImage}/>
                        </View>

                        <View style={styles.infoContainer}>
                            <View><Text style={styles.displayName}>{displayName}</Text></View>
                            <View><Text style={styles.userName}>{`@${userName}`}</Text></View>
                        </View>
                        
                    </View>

                    <View style={styles.bodyContainer}><Text style={styles.postBody}>{postBody}</Text></View>

                    <View style={styles.footerContainer}>
                        <View style={styles.likesContainer}></View>
                        <View style={styles.blank}></View>
                        <View style={styles.timeStampContainer}><Text>{timeStamp}</Text></View>
                    </View>

                </Card>
            </View>
        )}

    return (
        
        <View style={styles.container}>
                <Pressable onPress={ () => mergePostCommentData()}>
                    <Text style={{color:"white"}}>HELLO</Text>
                </Pressable>
                <Pressable onPress={ () => console.log(commentList)}>
                    <Text style={{color:"white"}}>EAZYMONEY</Text>
                </Pressable>
            <View style={styles.commentsContainer}>

                <FlatList 
                
                    data={commentList}
                    renderItem={({item, index}) => {
                        if (index !== 0){
                            return (<IndividualComment item={item}></IndividualComment>)
                        } else {
                            return (renderSinglePost(item))
                        }
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>

            <View style={styles.addCommentContainer}>
                <AddComment></AddComment>
            </View>

        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    postContainer: {
        flex: 2,
        flexDirection: 'column'
    },
    
    cardActual:{
        borderWidth: 2,
        borderColor: "purple",
        borderRadius:10,
        backgroundColor:"rgb(33, 37, 41)"
    },

    headerContainer:{
        flexDirection:"row",
        marginBottom:10
    },

    profileImage: {
        height:80,
        width:80,
        borderRadius:100,
        borderWidth: 2,
        borderColor: "purple"
    },

    infoContainer: {
        flexDirection:"column",
        justifyContent: "space-around"
    },

    bodyContainer:{

    },

    footerContainer:{

    },
    commentsContainer: {
        flex: 3,
    },

    addCommentContainer: {
        flex: 1,
    },
    
    displayName: {
        color: "white",
    },

    userName: {
        color: "white",
    },

    postBody:{
        color: "white",
    },
})
export default ExpandedPost;