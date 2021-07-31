import axios from "axios";
import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Keyboard} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "../screens/PostCard";
import { Card } from 'react-native-elements'
import { useSelector } from "react-redux";
import { IAppState } from "../redux/store";

const Feed: React.FC = (props: any) => {

    //Grab auth token
    const token = useSelector((state: IAppState) => state.auth.AccessToken);
    const user = useSelector((state: IAppState) => state.user);
    const [postCards, setPostCards] = useState([]);
    const [working, setWorking] = useState(false);
    const [newPost, setNewPost] = useState(' ');

    useEffect(() => {
        refresh();
    }, [])

    function refresh() {
        //Grab global feed
        axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post`, {
            headers: {
                Authorization: token
            }
        }).then(resp => {
            //resp.data is an array of posts
            setPostCards(resp.data[0]);
        })
    }

    //Add post to global feed
    const createPost = async () => {
        Keyboard.dismiss;
        try {
            setWorking(true);
            await axios.post(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post`, {
                displayName: user?.displayName,
                displayImg: user?.profileImg,
                userName: user?.userName,
                postBody: `${newPost}`
            }, {
                headers: {
                    Authorization: token
                },
            })
        } catch (err) {
            console.log(err);
            console.log(err.response);
            return;
        }
        refresh();
        setNewPost('');
        setWorking(false);
        
    }

    // const onSubmit = (text:string) => {
    //     Keyboard.dismiss;
    //     setNewPost(text);
    // }

    // const addPost = () => {
    //     return (
    //         <Card containerStyle={styles.card}>
    //             <View style={styles.postContainer}>
    //                 <View style={styles.inputContainer}>
    //                     <TextInput
    //                         placeholder="What's happening?"
    //                         placeholderTextColor="white"
    //                         style={styles.inputBox}
    //                         value={newPost}
    //                         onChangeText={(text) => onSubmit(text)} />
    //                 </View>

    //                 <View style={styles.buttonContainer}>
    //                     <TouchableOpacity style={styles.TouchableOpacity} onPress={createPost}>
    //                         <Text style={styles.text}>Post</Text>
    //                     </TouchableOpacity>
    //                 </View>
    //             </View>
    //         </Card>
    //     )
    // }

    return (
        <View style={styles.container}>
            <FlatList
                keyboardShouldPersistTaps={"always"}
                data={postCards}
                ListHeaderComponent={
                    <Card containerStyle={styles.card}>
                        <View style={styles.postContainer}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Leave a Post"
                                    placeholderTextColor="white"
                                    style={styles.inputBox}
                                    value={newPost}
                                    onChangeText={(text) => setNewPost(text)} />
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={[styles.TouchableOpacity, working ? styles.working : styles.notWorking]} onPress={() => createPost()}>
                                    <Text style={styles.text}>Post</Text>
                                </TouchableOpacity>
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
        fontSize: 14,
        color: "white",
    },

    card: {
        flex: 1,
        backgroundColor: 'rgb(33, 37, 41)',
        borderWidth: 4,
        borderColor: 'purple',
        borderRadius: 30,
        paddingBottom: 5
    },

    postContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    inputBox: {
        color: "white",
        fontSize: 16,
        flexDirection: "row",
        justifyContent: "center",
        textAlignVertical: 'top',
        paddingVertical: 15,
        paddingHorizontal: 5,
        marginLeft: 10,

    },

    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    inputContainer: {
        flex: 4,
        marginBottom: 10,
        backgroundColor: 'rgb(42,45,47)',
        borderRadius: 20,
        justifyContent: "center",
        alignContent: "center",
    },

    TouchableOpacity: {
        backgroundColor: "purple",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 15,
    },

    working:{
        backgroundColor:"grey"
    },

    notWorking:{
        backgroundColor:"purple"
    }
})