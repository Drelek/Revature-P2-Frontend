import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { IAppState } from '../redux/store';


const SearchScreen: React.FC = (props: any) => {

    const [search, setSearch] = useState(' ');
    const token = useSelector((state: IAppState) => state.auth.AccessToken);

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
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="white"
                    style={styles.inputBox}
                    onChangeText={setSearch} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.pressable} onPress={() => Search()}>
                    <Text style={styles.text}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}


export default SearchScreen;

const styles = StyleSheet.create({

    text: {
        fontSize: 14,
        color: "white",
    },


    container: {
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
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },

    pressable: {
        backgroundColor: "purple",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 15,
        marginTop: 20
    }
})

