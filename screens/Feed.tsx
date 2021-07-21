import React from "react";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "../screens/PostCard";
import Post from "../models/Post";
import { useState } from "react";
import ProfileImgPlaceholder from '../assets/images/profile-img-placeholder.png'



const Feed: React.FC = (props: any) => {


    const [postCards, setPostCards] = useState([
        {
            displayImg: ProfileImgPlaceholder,
            displayName: "my name is",
            userName: "name",
            postBody: "I know the truth",
            likes: "hi",
            timeStamp: "12312",
            comments: "hello"
        },
        {
            displayImg: ProfileImgPlaceholder,
            displayName: "my name is",
            userName: "name",
            postBody: "I know the truth",
            likes: "hi",
            timeStamp: "12312",
            comments: "hello"
        }
    ]);


    return (
        <SafeAreaView>
            <FlatList data={postCards} renderItem={({ item }) => <PostCard item={item}> </PostCard>} />

        </SafeAreaView>
    )
}


export default Feed;

const styles = StyleSheet.create({
    item: {
        color: "white"
    }
})
