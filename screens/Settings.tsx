import { View, Text, TextInput, StyleSheet,Pressable} from 'react-native'
import React, { useState } from 'react';
import {Card} from 'react-native-elements'
const SettingsScreens:React.FC = () => {

    const [email, setEmail] = useState(' ');
    const [handle, setHandle] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [profileimg, setProfileImage] = useState(' ');

    function submitForm() {

    }

    return (

        <Card containerStyle={styles.cardActual}>
            <Text style={styles.text}> Change your profile information </Text>
            <View style={styles.topform}>

                <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} />
            </View>
            <View style={styles.form}>
                <TextInput placeholder="Handle" onChangeText={(text) => setHandle(text)} />
            </View>
            <View style={styles.form}>
                <TextInput placeholder="Password" onChangeText={(text) => setPassword(text)} />
            </View>
            <View style={styles.form}>
                <TextInput placeholder="Profile Image" onChangeText={(text) => setProfileImage(text)} />
            </View>
            <View>
                <Pressable style={styles.button} onPress={() => submitForm()}>
                    <Text style={styles.buttontext}>Submit</Text>
                </Pressable>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardActual: {
        borderRadius:10,
        borderColor: 'purple', 
        borderWidth: 2,
        backgroundColor: 'rgb(33, 37, 41)',
    },
    topform: {
        marginTop: 100,
        marginLeft: 100,
    },
    form: {
        marginTop: 30,
        marginLeft: 100,
    },
    text: {
        fontSize: 22,
        color: "white",
        fontFamily: "BadScript"
    },
    button: {
        marginTop: 30,
        marginLeft: 50
    },
    buttontext: {
        fontSize: 15
    }
})

export default SettingsScreens;

