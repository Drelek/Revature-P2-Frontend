import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Image, SafeAreaView, Pressable, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { useState } from 'react';
import PostCard from './PostCard';
import ProfileImgPlaceholder from '../assets/images/profile-img-placeholder.png'
import { ScrollView } from 'react-native-gesture-handler';


const Profile = () => {

    const [postCards, setPostCards] = useState([
        {
            displayImg: "null",
            displayName: "my name is",
            userName: "name",
            postBody: "I know the truth",
            likes: "hi",
            timeStamp: "12312",
            comments: "hello"
        },
        {
            displayImg: "null",
            displayName: "my name is",
            userName: "name",
            postBody: "I know the truth",
            likes: "hi",
            timeStamp: "12312",
            comments: "hello"
        }
    ]);

    const addFollower = () => {
        //TODO
        //Push follower to following array on user object
    }

    

    return(
        <View 
            style= {styles.outerContainer}
        >   
            <ScrollView>
            <View
                style={styles.innerContainer}
            >

               

                <Card containerStyle={styles.profileCard}>
                    <View
                        style={{flexDirection: "row"}}
                    > 
                        <Image
                            source={require('../assets/images/profile-img-placeholder.png')}
                            style={styles.image}
                        />

                        <View>
                            <Text 
                                style={styles.displayname}
                            >HolyGuack</Text>
                            <Text
                                style={styles.username}
                            >@guackholy</Text>
                            <Text
                                style={styles.email}
                            >Email Placeholder</Text>     
                        </View>

                        <View>
                        <Pressable
                            onPress= {() => addFollower()}
                        >
                            <Image 
                                style={styles.followerIcon}
                               source={require('../assets/images/follower-icon.png')}
                          />
                         </Pressable>
                          </View>
                    </View>
                </Card>

                
            </View>

            <SafeAreaView
            
            >
                
                <FlatList 
                    data={postCards}
                    renderItem={({item}) => 
                        <PostCard item={item}></PostCard>
                    }    
                />

            </SafeAreaView>

            </ScrollView>

   
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    innerContainer: {
        flexDirection: "column",
        alignItems: "center",
        
    },
    profileCard: {
        flex:1, 
        borderTopLeftRadius:20, 
        borderColor: 'plum', 
        borderWidth: 1,
        borderTopRightRadius:20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: 'rgb(33, 37, 41)',
        width: 290,
        height: 110
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 25,
    },
    listOfPosts: {
        
    },
    displayname: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white",
        paddingLeft: 15
    },
    username: {
        fontSize: 18,
        color: "white",
        paddingLeft: 15
    },
    email: {
        fontSize: 18,
        color: "white",
        paddingLeft: 15
    },
    welcomeMessage: {
        fontSize: 30, 
        fontWeight: "bold", 
        color: "white", 
        fontStyle: "italic"
    },
    followerIcon: {
        width: 50,
        height: 60
    }
})