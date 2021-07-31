import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/store';
import PostCard from './PostCard';


const SearchScreen: React.FC = (props: any) => {

    const token = useSelector((state: IAppState) => state.auth.AccessToken);
    const user = useSelector((store: IAppState) => store.user);

    const [search, setSearch] = useState(' ');
    //const [searchedUsers, setUsers] = useState(' ')
    const searchedUsers = [
        {
            userName: 'theSponge',
            displayName: 'captain',
            profileImg: user?.profileImg,
            followers: ["sam", "mo", "kai", "jared"]
        },
        {

            userName: "admin",
            displayName: "no name",
            profileImg: user?.profileImg,
            followers: ["sam", "mo", "kai", "jared"]

        },
        {

            userName: "joe",
            displayName: "mama",
            profileImg: user?.profileImg,
            followers: ["sam", "mo", "kai", "jared"]

        }

    ]

    async function Search() {

        console.log(search);
        try {
            const res = await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/search/${search}`, { headers: { Authorization: token } });
            console.log(res);
        }
        catch (err) {
            console.log(err.response)
        }
    }

    return (

        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="white"

                        onChangeText={setSearch} />
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.pressable} onPress={() => Search()}>
                        <Text style={styles.text}>Search</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <FlatList data={searchedUsers}
                    renderItem={({ item }) => <Card>
                        <View >
                            <Image
                                source={{ uri: `${item.profileImg}` }}
                                style={styles.image}
                            />
                        </View>
                        <View>
                            <Text
                                style={styles.displayName}
                            >{item.displayName}</Text>
                            <Text
                                style={styles.username}
                            >{item.userName}</Text>
                            <Text>
                                {item.followers.size}
                            </Text>
                        </View>

                    </Card>}
                    keyExtractor={item => item.userName} />
            </View>
        </View>
    );

}


export default SearchScreen;

const styles = StyleSheet.create({

    text: {
        fontSize: 14,
        color: "white",
        marginTop: 0,


    },


    container: {
        flex: 1,
        justifyContent: 'center',
    },
    topContainer: {
        flex: 1,
        flexDirection: "row"

    },

    buttonContainer: {

        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    inputContainer: {

        backgroundColor: 'rgb(42,45,47)',
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 10,


    },

    pressable: {

        backgroundColor: "purple",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 20,
        width: 70,


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
})

