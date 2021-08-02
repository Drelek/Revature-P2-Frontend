import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Keyboard, Platform, KeyboardEvent, KeyboardAvoidingView, RefreshControl } from "react-native";
import { FlatList } from "react-native";
import PostCard from "../screens/PostCard";
import { Card } from 'react-native-elements'
import { useSelector } from "react-redux";
import { IAppState } from "../redux/store";

const Feed: React.FC = (props: any) => {

    //Grab auth token
    const token = useSelector((state: IAppState) => state.auth.AccessToken);
    const user = useSelector((state: IAppState) => state.user);
    const globalFeed = useSelector((state: IAppState) => state.feed);
    const [refreshing, setRefreshing] = useState(false);
    const [postCards, setPostCards] = useState([]);
    const [working, setWorking] = useState(false);
    const [newPost, setNewPost] = useState(' ');

    const [keyboardOffset, setKeyboardOffset] = useState(0);
    const onKeyboardShow = (event: KeyboardEvent) => {
        if (Platform.OS === "android") {
            setKeyboardOffset(event.endCoordinates.height + 100)
        } else {
            setKeyboardOffset(event.endCoordinates.height - 25)
        }
    }
    const onKeyboardHide = () => setKeyboardOffset(0);
    const keyboardDidShowListener: any = useRef();
    const keyboardDidHideListener: any = useRef();

    useEffect(() => {
        keyboardDidShowListener.current = Keyboard.addListener('keyboardWillShow', onKeyboardShow);
        keyboardDidHideListener.current = Keyboard.addListener('keyboardWillHide', onKeyboardHide);

        return () => {
            keyboardDidShowListener.current.remove();
            keyboardDidHideListener.current.remove();
        };
    }, []);

    useEffect(() => {
        refresh();
    }, [globalFeed])

    async function refresh() {
        setRefreshing(true);
        if (globalFeed) {
            //Grab global feed
            await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post`, {
                headers: {
                    Authorization: token
                }
            }).then(resp => {
                //resp.data is an array of posts
                setPostCards(resp.data[0]);
            });
        } else {
            //Grab follower feed
            await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/user/${user?.userName}`, {
                headers: {
                    Authorization: token
                },
                params: {
                    following: true
                }
            }).then(resp => {
                //resp.data is an array of posts
                setPostCards(resp.data[0]);
            });
        }
        setRefreshing(false);
    }

    //Add post to global feed
    const createPost = async () => {
        if (working || !newPost) return;
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
            setWorking(false);
            return;
        }
        refresh();
        setNewPost('');
        setWorking(false);

    }

    const addPostComponent = () => {
        return (
            <Card containerStyle={styles.card}>
                <View style={styles.postContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
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
            </Card>
        )
    }

    return (
        <KeyboardAvoidingView>

            <View style={styles.listContainer}>
                <FlatList
                    keyboardShouldPersistTaps={"always"}
                    data={postCards}
                    renderItem={({ item }) => <PostCard deletePost={refresh} item={item}> </PostCard>}
                    keyExtractor={(item, index) => index.toString()} 
                    refreshControl={<RefreshControl colors={["purple"]} refreshing={refreshing} onRefresh={refresh} enabled={true}/>}
                />
            </View>


            <View style={{
                ...Platform.select({
                    ios: {
                        position: 'absolute',
                        width: '100%',
                        bottom: keyboardOffset,
                    },
                    android: {
                        position: 'absolute',
                        width: '100%',
                        bottom: keyboardOffset
                    }
                })
            }}>
                {addPostComponent()}
            </View>
        </KeyboardAvoidingView>
    )
}


export default Feed;

const styles = StyleSheet.create({
    listContainer: {
        paddingBottom: 100
    },

    text: {
        fontSize: 12,
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

    working: {
        backgroundColor: "grey"
    },

    notWorking: {
        backgroundColor: "purple"
    }
})