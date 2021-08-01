import React, { useState }from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import PostCard from './PostCard';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { IAppState } from '../redux/store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile: React.FC = (props: any) => {

    const user = useSelector((state: IAppState) => state.user);
    const token = useSelector((state: IAppState) => state.auth?.AccessToken);
    const[userGrab, setUserGrab] = useState<any>({ });
    const userRedirect = useState(props?.profileInfo);
    const [postCards, setPostCards] = useState<any[]>([]);

    //    //Grab user specific data (not of current user): { email, profileImg}
    //    const grabUserData = async() => {
    //        console.log(46, thisProps);
    //     await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/${props.item.userName}`, {
    //         headers: {
    //             Authorization: token
    //         }
    //     }).then(resp => {
    //         console.log(resp)
    //     })
    // }

    let thisProps: any;
    thisProps = props.route.params;

    useEffect(() => {
        console.log(props.route.params.userName, 23);
        axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/user/${thisProps.userName}`, {
            headers : {
                Authorization : token
            }
        }).then(resp => {
            //Response is an array of posts 
            //console.log(resp);
            setPostCards(resp.data[0]);
           
        })

        axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/${thisProps.userName}`, {
            headers: {
                Authorization: token
            }
        }).then(resp => {
            console.log(resp.data[0])

            
            thisProps = {
                userName : resp.data[0].dataKey.S,
                displayName : resp.data[0].displayName.S,
                profileImg : resp.data[0].profileImg.S,
                email : resp.data[0].email.S
            };
            setUserGrab(thisProps);
        })
    }, [])

 

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
                                source={{ uri: `${userGrab.profileImg}` }}
                                style={styles.image}
                            />
                        </View>


                        <View style={styles.infoContainer}>
                            <Text
                                style={styles.displayName}
                            >{userGrab.displayName}</Text>
                            <Text
                                style={styles.username}
                            >{userGrab.userName}</Text>
                            <Text
                                style={styles.email}
                            >{userGrab.email}</Text>
                        </View>
                        {/* <View>{console.log(thisProps)}</View> */}
                        <View >
                        <TouchableOpacity
                            style={styles.followerContainer}
                            onPress= {() => {addFollower()}}
                        >
                            <Icon
                                    name="account-check"
                                    size={40}
                                    color={"purple"}  
                                />
                         </TouchableOpacity>
                         <TouchableOpacity
                            style={styles.followerContainer}
                            onPress= {() => {addFollower()}}
                        >
                            <Icon
                                    name="account-plus"
                                    size={40}
                                    color={"white"}    
                                />
                         </TouchableOpacity>
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