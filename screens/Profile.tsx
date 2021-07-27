import React, { useState }from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, Pressable, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import PostCard from './PostCard';
import { ScrollView } from 'react-native-gesture-handler';


const Profile = () => {

    const [postCards, setPostCards] = useState([
        {
            displayImg: undefined,
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

    const addFollower = () => {
        //TODO
        //Push follower to following array on user object
    }

    

    return(
        <View 
            style= {styles.outerContainer}
        >   
            <View
                style={styles.profileContainer}
            >
                <Card containerStyle={styles.profileCard}>
                    <View
                        style={{flexDirection: "row"}}
                    > 
                        <View style={styles.imageContainer}>
                            <Image
                            source={require('../assets/images/illuminati.png')}
                            style={styles.image}
                            />
                        </View>
                        

                        <View style={styles.infoContainer}>
                            <Text 
                                style={styles.displayName}
                            >Hello</Text>
                            <Text
                                style={styles.username}
                            >@God</Text>
                            <Text
                                style={styles.email}
                            >Email</Text>     
                        </View>

                        <View >
                        <Pressable
                            style={styles.followerContainer}
                            onPress= {() => addFollower()}
                        >
                            <Image 
                                style={styles.followerIcon}
                               source={require('../assets/images/followerIcon.png')}
                          />
                         </Pressable>
                          </View>
                    </View>
                </Card>

                
            </View>

            <SafeAreaView style={styles.postContainer}>
                
                <FlatList 
                    data={postCards}
                    renderItem={({item}) => 
                        <PostCard item={item}
                        ></PostCard>
                    }
                    keyExtractor={(item, index) => index.toString()}    
                />

            </SafeAreaView>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    outerContainer: {
        flex:1,
        flexDirection: "column",
    },
    profileContainer:{
        flex:1,
        // borderBottomWidth: 4,
        // borderColor:"purple",
    },
    postContainer:{
        flex:3,
    },
    imageContainer:{
        flex:1
    },
    infoContainer: {
        flex:2,
    },
    profileCard: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'rgb(33, 37, 41)',
        borderRadius:10,
        borderColor: 'purple', 
        borderWidth: 2,
        marginBottom:10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor:"purple"
    },
    displayName: {
        fontWeight: "bold",
        fontSize: 22,
        color: "white",
        paddingLeft: 15,
        marginBottom:5
    },
    username: {
        fontSize: 18,
        color: "white",
        paddingLeft: 15,
        marginBottom:5
    },
    email: {
        fontSize: 18,
        color: "white",
        paddingLeft: 15,
        marginBottom:5
    },
    welcomeMessage: {
        fontSize: 30, 
        fontWeight: "bold", 
        color: "white", 
        fontFamily: "BadScript"
    },
    followerIcon: {
        width: 30,
        height: 30
    },
    followerContainer:{
        flex:1,
        flexDirection: "column",
        
    }
})