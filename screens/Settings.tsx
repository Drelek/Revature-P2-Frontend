import { View, Text, TextInput, StyleSheet,TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native'
import React, { useState } from 'react';
import {Card} from 'react-native-elements'
const SettingsScreens:React.FC = () => {

    const [email, setEmail] = useState(' ');
    const [handle, setHandle] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [profileImg, setProfileImage] = useState(' ');
    const [working, setWorking] = useState(false);
    
    function submitForm() {

    }

    return (
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
        <View style={styles.smallView}></View>
        <SafeAreaView style={styles.largeView}>
        <Card containerStyle={styles.cardActual}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}> Login and Security </Text>
            </View>
            
            <View style={styles.topForm}>

            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                placeholderTextColor="white" placeholder="Handle" onChangeText={(text) => setHandle(text)} />
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input}
                placeholderTextColor="white" placeholder="Profile Image" onChangeText={(text) => setProfileImage(text)} />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => submitForm()}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </Card>
        </SafeAreaView>
        <View style={styles.bottomView}></View>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    smallView:{
        flex:1,
    },
    bottomView:{
        flex:1
    },
    largeView:{
        flex: 2,
        justifyContent: 'flex-end'
    },
    cardActual: {
        borderRadius:10,
        borderColor: 'purple', 
        borderWidth: 2,
        backgroundColor: 'rgb(33, 37, 41)',
        color: 'white',
    },

    topForm: {
        margin:10
    },
    form: {
        margin:10
    },

    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    text: {
        fontSize: 25,
        color: "white",
        fontFamily: "BadScript",
        alignItems: 'center',
        textAlign: 'center',
    },
    input:{
        fontFamily: "BadScript",
        fontSize: 18,
        color: "white",
        borderBottomWidth: 2,
        borderColor: 'purple',
        paddingBottom: 10,
        alignItems: 'center',
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'purple',
        marginVertical:10,
        marginHorizontal:25
    },
    buttonText: {
        fontSize: 20,
        fontFamily: "BadScript",
        color: "white",
    }
})

export default SettingsScreens;

