import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "../screens/PostCard";
import { Card } from 'react-native-elements'

const Feed: React.FC = (props: any) => {

    const [newPost, setNewPost] = useState(' ');
    useEffect(() => {

        axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post`, {
            headers: {
                Authorization: "TokenToBePulledFromState"
            }
        }).then(resp => {
            //resp.data is an array of posts
            setPostCards(resp.data)
        })

    })


    const [postCards, setPostCards] = useState([]);

    const createPost = () => {

    }

    const addPost = () => {
        return (
            <Card containerStyle={styles.card}>
                <View style={styles.postContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="What's happening?"
                            placeholderTextColor="white"
                            style={styles.inputBox}
                            onChangeText={(text) => setNewPost(text)} />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.pressable} onPress={() => createPost()}>
                            <Text style={styles.text}>Post</Text>
                        </Pressable>
                    </View>
                </View>
            </Card>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={postCards}
                ListHeaderComponent={<Card containerStyle={styles.card}>
                    <View style={styles.postContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="What's happening?"
                                placeholderTextColor="white"
                                style={styles.inputBox}
                                onChangeText={(text) => setNewPost(text)} />
                        </View>

                        <View style={styles.buttonContainer}>
                            <Pressable style={styles.pressable} onPress={() => createPost()}>
                                <Text style={styles.text}>Post</Text>
                            </Pressable>
                        </View>
                    </View>
                </Card>}
                renderItem={({ item }) => <PostCard item={item}> </PostCard>}
                keyExtractor={(item, index) => index.toString()} />
        </View>
    )
}


export default Feed;

const styles = StyleSheet.create({
    container: {
        marginTop: 0
    },

    text: {
        fontSize: 18,
        color: "white",
    },

    card: {
        flex: 1,
        backgroundColor: 'rgb(33, 37, 41)',
        borderWidth: 4,
        borderColor: 'purple',
        borderRadius: 10,
    },
    postContainer: {
        flexDirection: 'row'
    },

    inputBox: {
        color: "white",
        fontSize: 18,
        flexDirection: "row",
        justifyContent: "center",
    },

    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },

    inputContainer: {
        flex: 5,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center"
    },

    pressable: {

    }
})