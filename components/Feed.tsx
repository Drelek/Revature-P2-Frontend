
import React from "react";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "../screens/PostCard";
import Post from "../models/Post";
import { useState } from "react";



const Feed: React.FC = (props: any) => {


    const [postCards, setPostCards] = useState([
        {
            displayImg: undefined,
            displayName: "my name is Mo",
            userName: "name",
            postBody: "I know the truth,The search bar allows users to search for user handles. The user's input queries the database and returns the closest. We plan to implement follow, likes and comment functionality in the near future and even making our application mobile friendly!",
            likes: "hi",
            timeStamp: "6/20/20 6:30pm",
            comments: "hello"
        },
        {
            displayImg: 'https://reactnative.dev/img/tiny_logo.png',
            displayName: "Kai",
            userName: "Kaiba",
            postBody: "I know",
            likes: "hi",
            timeStamp: "6/20/20 6:30pm",
            comments: "whats up"
        },
        {
            displayImg: 'happy.png',
            displayName: "God",
            userName: "God",
            postBody: "I am back bb",
            likes: [1,2,3,4,5],
            timeStamp: " 01/01/22 12:00am",
            comments: "hello"
        },
        {
            displayImg: 'happy.png',
            displayName: "Jesus",
            userName: "GodsFavoriteSon",
            postBody: "Hello",
            likes: [1,2,3,4,5,6,7],
            timeStamp: "6/20/20 6:30pm",
            comments: "hello"
        }
    ]);


    return (
        <SafeAreaView>
            <FlatList style={styles.container} data={postCards} renderItem={({ item }) => <PostCard item={item}> </PostCard>} />
        </SafeAreaView>
    )
}


export default Feed;

const styles = StyleSheet.create({

    item: {
        // padding:10,
        color: "white"
    }
})