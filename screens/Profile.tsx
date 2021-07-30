import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, Pressable, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import PostCard from './PostCard';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { IAppState } from '../redux/store';


const Profile: React.FC = (props: any) => {

    const user = useSelector((state: IAppState) => state.user);
    const token = useSelector((state: IAppState) => state.auth?.AccessToken);
    const userRedirect = useState(props?.profileInfo);
    const [postCards, setPostCards] = useState([]);

    //We have to account for whether app user is reaching profile page
    //Or app user is redirecting to another user profile
    const [thisUser, setThisUser] = useState(true);

    let thisProps: any;

    if (props.profileInfo) {
        setThisUser(false);
        thisProps = props.profileInfo;
    } else {
        thisProps = props.route.params;

    }
    useEffect(() => {
        //Is current user trying to access some other profile?
        if (props.profileInfo) {
            // setThisUser(false);
            thisProps = props.profileInfo;
        } else {
            thisProps = props.route.params;

        }
    })

    //Grab user posts of this specific user
    let userPostArray = []
    const grabUserSpecificPosts = async () => {
        //
        let userName;
        if (thisUser) {
            userName = user?.userName;
        } else {
            userName = thisProps.userName;
        }
        await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/${thisProps.userName}/specific`, {
            headers: {
                Authorization: token
            }
        }).then(resp => {
            //Response is an array of posts 
            setPostCards(resp.data[0]);

        })
    }

    //Follow or unfollows dependant on whether user exists on following array 
    const addFollower = async () => {
        await axios.post(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/${thisProps.userName}/follow`, {
            headers: {
                Authorization: token
            }
        }).then(resp => {
            //Response returns entire user object after update operation has been completed

        })
    }

    return (
        <View
            style={styles.outerContainer}
        >
            <View

                style={styles.profileContainer}
            >
                <Card containerStyle={styles.profileCard}>
                    <View
                        style={{ flexDirection: "row" }}
                    >
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: `${thisProps.profileImg}` }}
                                style={styles.image}
                            />
                        </View>


                        <View style={styles.infoContainer}>
                            <Text
                                style={styles.displayName}
                            >{thisProps.displayName}</Text>
                            <Text
                                style={styles.username}
                            >{thisProps.userName}</Text>
                            <Text
                                style={styles.email}
                            >{thisProps.email}</Text>
                        </View>
                        {/* <View>{console.log(thisProps)}</View> */}
                        <View >
                            <Pressable
                                style={styles.followerContainer}
                                onPress={() => { addFollower() }}
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
                    renderItem={({ item }) =>
                        <PostCard item={item}>

                        </PostCard>
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
        flex: 1,
        flexDirection: "column",
    },
    profileContainer: {
        flex: 1,
    },
    postContainer: {
        flex: 3,
    },
    imageContainer: {
        flex: 1
    },
    infoContainer: {
        flex: 2,
    },
    profileCard: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(33, 37, 41)',
        borderRadius: 10,
        borderColor: 'purple',
        borderWidth: 5,
        marginBottom: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "purple"
    },
    displayName: {
        fontWeight: "bold",
        fontSize: 22,
        color: "white",
        paddingLeft: 15,
        marginBottom: 5
    },
    username: {
        fontSize: 18,
        color: "white",
        paddingLeft: 15,
        marginBottom: 5
    },
    email: {
        fontSize: 18,
        color: "white",
        paddingLeft: 15,
        marginBottom: 5
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
    followerContainer: {
        flex: 1,
        flexDirection: "column",

    }
})