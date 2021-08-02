import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Card } from 'react-native-elements';
import PostCard from './PostCard';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { IAppState } from '../redux/store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppAction } from '../redux/actions';
import { IUser } from '../models/User';

const Profile: React.FC = (props: any) => {

    const user = useSelector((state: IAppState) => state.user);
    const token = useSelector((state: IAppState) => state.auth?.AccessToken);
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);
    const [userGrab, setUserGrab] = useState<any>({});
    const [postCards, setPostCards] = useState<any[]>([]);
    const [isFollowing, setIsFollowing] = useState(user?.following?.includes(props.route.params.userName));

    let thisProps: any;
    thisProps = props.route.params;

    async function refresh() {
        setRefreshing(true);
        await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/user/${thisProps.userName}`, {
            headers: {
                Authorization: token
            }
        }).then(resp => {
            setPostCards(resp.data[0]);
        })

        await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/${thisProps.userName}`, {
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
            const newUser: IUser = {
                userName: thisProps.userName,
                displayName: thisProps.displayName,
                profileImg: thisProps.profileImg,
                email: thisProps.email,
                followers: resp.data[0].followers.SS,
                following: resp.data[0].following.SS
            }
            if (thisProps.userName == user?.userName) dispatch({
                type: AppAction.UPDATE_USER,
                payload: {
                    user: newUser
                }
            });
        })
        setRefreshing(false);
    }
    
    useEffect(() => {
        refresh();
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

        setIsFollowing(!isFollowing);
        await axios.post(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/${user?.userName}/follow`, body, {
            headers: {
                Authorization: token
            }
        });
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
                        adjustsFontSizeToFit 
                        numberOfLines={1}
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
                    refreshControl={<RefreshControl colors={["purple"]} refreshing={refreshing} onRefresh={refresh} enabled={true}/>}
                />

            </SafeAreaView>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    emailContainer: {
        flex:1
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
        backgroundColor: "purple",
        borderWidth: 2,
        borderColor: "purple",
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
        color: "white",
        paddingLeft: 15,
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