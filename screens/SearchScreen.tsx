import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, useWindowDimensions, Keyboard } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/store';
import { Card } from 'react-native-elements'
import UserCard from '../components/UserCard';

const SearchScreen: React.FC = (props: any) => {

    const [search, setSearch] = useState(' ');
    const [working, setWorking] = useState(false);
    const [results, setResults] = useState([]);
    const windowHeight = useWindowDimensions().height;
    const token = useSelector((state: IAppState) => state.auth.AccessToken);
    const user = useSelector((store: IAppState) => store.user);

    
    async function Search() {
        console.log(search);
        try {
            setWorking(true);
            const res = await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/search/${search}`, { headers: { Authorization: token } });
            console.log(res.data);
            setResults(res.data[0]);
            setWorking(false);
            Keyboard.dismiss();
        }
        catch (err) {
            console.log(err.response)
        }
    }

    const renderSearch = () => {
        return (
            <Card containerStyle={styles.card}>
                <View style={styles.postContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.inputBox}
                        onChangeText={setSearch} />
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.TouchableOpacity, working ? styles.working : styles.notWorking]} onPress={() => Search()}>
                            <Text style={styles.text}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        )
    }

    return (
        <View style={[styles.wholeScreenContainer, {minHeight: Math.round(windowHeight)}]}>

            <View style={styles.searchContainer}>
                {renderSearch()}
            </View>
            <View style={styles.listContainer}>
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
    
    wholeScreenContainer: {
        flex:1
    },

    searchContainer: {
        flex:1
    },

    listContainer: {
        flex:6
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
        paddingBottom: 5,
        justifyContent: 'center'
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
        paddingVertical:15,
        paddingHorizontal: 5,
        marginLeft: 10,
    },

    buttonContainer: {
        flex: 1.3,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignContent:"center",
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

    working: {
        backgroundColor: "grey"
    },

    notWorking: {
        backgroundColor: "purple"
    }

})

