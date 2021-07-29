import axios from "axios";
import React, { useState }  from "react";
import { useEffect } from "react";
import { StyleSheet, View, Text, Pressable, TextInput} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "../screens/PostCard";
import { Card } from 'react-native-elements'

const Feed: React.FC = (props: any) => {

    const[newPost, setNewPost] = useState(' ');
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


    const [postCards, setPostCards] = useState([
        {
            displayImg: 'https://pbs.twimg.com/profile_images/1305027806779203584/tAs8GbuL_400x400.jpg',
            displayName: "my name is Mo",
            userName: "name",
            postBody: "I know the truth,The search bar allows users to search for user handles. The user's input queries the database and returns the closest. We plan to implement follow, likes and comment functionality in the near future and even making our application mobile friendly!",
            likes: [1,2,3,4],
            timeStamp: "6/20/20 6:30pm",
            comments: [1,2,3,4,112,3234523,343232]
        },
        {
            displayImg: 'https://reactnative.dev/img/tiny_logo.png',
            displayName: "Kai",
            userName: "Kaiba",
            postBody: "I know",
            likes: [1,2,3],
            timeStamp: "6/20/20 6:30pm",
            comments: [1,2,3,4,112,3234523,343232,1,1,1,1,1,1]
        },
        {
            displayImg: 'https://www.learnreligions.com/thmb/rlSNKScykYuF6qdA9tArkB-til8=/998x998/smart/filters:no_upscale()/SonOfGod1500x998-56a146083df78cf772691384.jpg',
            displayName: "God",
            userName: "God",
            postBody: "I am back bb",
            likes: [1,2,3,4,5],
            timeStamp: " 01/01/22 12:00am",
            comments: [1,2,3,4,112,3234523,343232]
        },
        {
            displayImg: 'https://pbs.twimg.com/profile_images/1305027806779203584/tAs8GbuL_400x400.jpg',
            displayName: "Jesus",
            userName: "GodsFavoriteSon",
            postBody: "Hello",
            likes: [1,2,3,4,5,6,7],
            timeStamp: "6/20/20 6:30pm",
            comments: [1,2,3,4,112,3234523]
        }
    ]);

    const createPost = () => {
        
    }

    return (
        <View style={styles.container}>
            <FlatList  
                data={postCards} 
                ListHeaderComponent={
            <Card containerStyle={styles.card}>
                <View style={styles.postContainer}>
                    <View style={styles.inputContainer}> 
                        <TextInput
                        placeholder="Leave a Post"
                        placeholderTextColor="white" 
                        style={styles.inputBox}
                        onChangeText={(text)=> setNewPost(text)}/>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.pressable} onPress={() => createPost()}>
                            <Text style={styles.text}>Post</Text>
                        </Pressable>
                    </View>
                </View>
            </Card>}
                renderItem={({item }) => <PostCard item={item}> </PostCard>} 
                keyExtractor={(item, index) => index.toString()}/>
        </View>
    )
}


export default Feed;

const styles = StyleSheet.create({
    container:{
        marginTop:0
    },

    text:{
        fontSize:14,
        color: "white",
    },

    card:{
        flex:1,
        backgroundColor:'rgb(33, 37, 41)',
        borderWidth:4,
        borderColor: 'purple',
        borderRadius:30, 
        paddingBottom:5
    },

    postContainer: {
        flexDirection:'row',
        justifyContent: 'center',
    },

    inputBox:{
        color: "white",
        fontSize:16,
        flexDirection:"row",
        justifyContent: "center",
        textAlignVertical: 'top',
        paddingVertical:15,
        paddingHorizontal:5,
        marginLeft:10,
        
    },

    buttonContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems: "center",
    },

    inputContainer:{
        flex:4,
        marginBottom:10,
        backgroundColor:'rgb(42,45,47)',
        borderRadius:20,
        justifyContent:"center",
        alignContent:"center",
    },

    pressable:{
        backgroundColor:"purple",
        paddingHorizontal:10,
        paddingVertical:15,
        marginBottom:10,
        borderRadius: 15,
    }
})