import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { IAppState } from '../redux/store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile: React.FC = (props: any) => {

    const user = useSelector((state: IAppState) => state.user);
    const token = useSelector((state: IAppState) => state.auth?.AccessToken);
    const [userGrab, setUserGrab] = useState<any>({});
    const [postCards, setPostCards] = useState<any[]>([]);
    const [isFollowing, setIsFollowing] = useState(user?.following?.includes(props.route.params.userName));

    let thisProps: any;
    thisProps = props.route.params;

    useEffect(() => {
        axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/user/${thisProps.userName}`, {
            headers: {
                Authorization: token
            }
        }).then(resp => {
            setPostCards(resp.data[0]);
        })

        axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/${thisProps.userName}`, {
            headers: {
                Authorization: token
            }
        }).then(resp => {


            thisProps = {
                userName: resp.data[0].dataKey.S,
                displayName: resp.data[0].displayName.S,
                profileImg: resp.data[0].profileImg.S,
                email: resp.data[0].email.S
            };
            setUserGrab(thisProps);
        })
    }, [])

    const renderFollowing = () => {
        if (isFollowing) {
            return (
                <Icon
                    name="account-check"
                    size={40}
                    color={"purple"}
                />
            );
        } else {
            return (
                <Icon
                    name="account-plus"
                    size={40}
                    color={"white"}
                />
            );
        }
    }

    //Follow or unfollows dependant on whether user exists on following array 
    const addFollower = async () => {
        const body = {
            isFollowing: isFollowing,
            userToFollow: thisProps.userName
        }

        await axios.post(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/${user?.userName}/follow`, body, {
            headers: {
                Authorization: token
            }
        }).then(resp => {
            setIsFollowing(!isFollowing);
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
                                source={{ uri: `${userGrab.profileImg}` }}
                                style={styles.image}
                            />
                        </View>

                    <View style={styles.allRightContainer}>
                    <View style={styles.topRightContainer}>
                        <View style={styles.infoContainer}>
                            <Text
                                style={styles.displayName}
                            >{userGrab.displayName}</Text>
                            <Text
                                style={styles.username}
                            >{`@${userGrab.userName}`}</Text>
                        </View>
                        
                        <View >
                            <TouchableOpacity
                                style={styles.followerContainer}
                                onPress={() => { addFollower() }}
                            >
                                {renderFollowing()}
                            </TouchableOpacity>
                        </View>
                    </View>

                        <View style={styles.emailContainer}><Text
                        style={styles.email}
                        >{userGrab.email}</Text></View>
                    </View>

                    </View>
                </Card>


            </View>

            <SafeAreaView style={styles.postContainer}>

                <FlatList
                    data={postCards}
                    renderItem={({ item }) =>
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
    emailContainer: {

    },

    allRightContainer: {

        flex:2,
        flexDirection:"column"
    },

    topRightContainer: {
        flex:3,
        flexDirection:"row",
    },

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
        fontSize: 15,
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