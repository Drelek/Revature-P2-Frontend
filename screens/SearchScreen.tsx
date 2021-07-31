import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Text, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/store';
import { Card } from 'react-native-elements'

const SearchScreen: React.FC = (props: any) => {

    const [search, setSearch] = useState(' ');
    const [working, setWorking] = useState(false);
    const [results, setResults] = useState([]);
    const token = useSelector((state: IAppState) => state.auth.AccessToken);

    async function Search() {
        console.log(search);
        try {
            // setWorking(true);
            const res = await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/search/${search}`, { headers: { Authorization: token } });
            console.log(res);
            
        }
        catch (err) {
            console.log(err.response)
        }
    }

    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                    <View style={styles.postContainer}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Search"
                                    placeholderTextColor="white"
                                    style={styles.inputBox}
                                    value={search}
                                    onChangeText={(text) => setSearch(text)} />
                            </View>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.TouchableOpacity} onPress={() => Search()}>
                                    <Text style={styles.text}>Post</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>
{/* assuming search backend and then saving onto local state */}
            <View style={styles.resultContainer}>
                {/* <FlatList
                data={results}
                renderItem={({ item }) => <PostCard item={item}> </PostCard>}
                keyExtractor={(item, index) => index.toString()} /> */}
            </View>

        </View>
    );

}


export default SearchScreen;

const styles = StyleSheet.create({
    container:{

    },

    text: {
        fontSize: 12,
        color: "white",
    },

    card: {
        flex: 1,
        backgroundColor: 'rgb(33, 37, 41)',
        borderWidth: 4,
        borderColor: 'purple',
        borderRadius: 30,
        paddingBottom: 5
    },

    postContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    inputBox: {
        color: "white",
        fontSize: 16,
        flexDirection: "row",
        justifyContent: "center",
        textAlignVertical: 'top',
        paddingVertical: 15,
        paddingHorizontal: 5,
        marginLeft: 10,

    },

    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    inputContainer: {
        flex: 4,
        marginBottom: 10,
        backgroundColor: 'rgb(42,45,47)',
        borderRadius: 20,
        justifyContent: "center",
        alignContent: "center",
    },

    TouchableOpacity: {
        backgroundColor: "purple",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 15,
    },

    working:{
        backgroundColor:"grey"
    },

    notWorking:{
        backgroundColor:"purple"
    }
})

