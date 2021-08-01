import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Text, Pressable, Image } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/store';
import { Card } from 'react-native-elements'
import UserCard from '../components/UserCard';

const SearchScreen: React.FC = (props: any) => {

    const [search, setSearch] = useState(' ');
    const [working, setWorking] = useState(false);
    const [results, setResults] = useState([]);
    const token = useSelector((state: IAppState) => state.auth.AccessToken);
    const user = useSelector((store: IAppState) => store.user);

    //const [searchedUsers, setUsers] = useState(' ')
    const searchedUsers = [
        {
            userName: 'theSponge',
            displayName: 'captain',
            profileImg: user?.profileImg,
            followers: "100"
        },
        {

            userName: "admin",
            displayName: "no name",
            profileImg: user?.profileImg,
            followers: "1"

        },
        {

            userName: "joe",
            displayName: "mama",
            profileImg: user?.profileImg,
            followers: "10"

        },
        {

            userName: "asdadsxz",
            displayName: "mama",
            profileImg: user?.profileImg,
            followers: "50"

        },
        {

            userName: "asdas",
            displayName: "mama",
            profileImg: user?.profileImg,
            followers: ["sam", "mo", "kai", "jared"]

        }

    ]

    async function Search() {
        console.log(search);
        try {
            // setWorking(true);
            const res = await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/search/${search}`, { headers: { Authorization: token } });
            console.log(res.data);
            setResults(res.data[0]);
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
                <FlatList
                    data={results}
                    renderItem={({ item }) => <UserCard item={item} />}
                    keyExtractor={(item, index) => index.toString()
                    } />
            </View>
        </View>
    );

}


export default SearchScreen;

const styles = StyleSheet.create({

    text: {
        fontSize: 12,
        color: "white",
        marginTop: 0,


    },
    container: {
        flex: 1,
        justifyContent: 'center',


    },
    topContainer: {
        flexDirection: "row",
        height: 150

    },

    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginLeft: 10,
        marginRight: 15,
        marginTop: 20,
        marginBottom: 13
    },
    userContainer: {

        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: 'rgb(33, 37, 41)',
        borderRadius: 10,
        borderColor: 'purple',
        borderWidth: 5,
        marginBottom: 15,
        marginTop: 15,
        marginHorizontal: 15,
    },

    inputContainer: {
        backgroundColor: 'rgb(42,45,47)',
        borderRadius: 15,
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 10,
        marginTop: 90,
        marginBottom: 10,
        width: 330

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
        backgroundColor: "purple",
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "flex-start",
        alignItems: "flex-start",

    },
    displayName: {
        fontWeight: "bold",
        fontSize: 22,
        color: "white",
        paddingLeft: 15,
        marginBottom: 5,

    },
    username: {
        fontSize: 18,
        color: "white",
        paddingLeft: 15,
        marginBottom: 5
    },
})

