import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const SearchScreen: React.FC = (props: any) => {

    const [search, setSearch] = useState(' ');

    async function Search() {
        try {
            const res = await axios.get(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/user/search${search}`)
            console.log(res)
            console.log(search)
        }
        catch (err) {
            console.log(err.data)
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <TextInput style={styles.input} placeholder="Search" onChangeText={setSearch} />
                <TouchableOpacity style={styles.button} onPress={() => Search()}>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}


export default SearchScreen;

const styles = StyleSheet.create({
    button: {
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'purple',
        fontSize: 18,
    },
    input: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: 'white'
    },
    safeArea: {
        flex: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }


})