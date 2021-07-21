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
    

    return(
        <View 
            style= {styles.outerContainer}
        >   
            <ScrollView>
            <View
                style={styles.innerContainer}
            >
                <Card>
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
                            <Text>Email</Text>     
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
    image: {
        width: 80,
        height: 80,
        borderRadius: 25,
    },
    listOfPosts: {
        
    },
    displayname: {
        fontWeight: "bold",
        fontSize: 25
    },
    username: {
        fontSize: 18
    },
})