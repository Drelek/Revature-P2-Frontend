import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react';
import { Card } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../redux/store';
import axios from 'axios';
import { AppAction } from '../redux/actions';
import { IUser } from '../models/User';
import Toast from 'react-native-toast-message';

const SettingsScreens: React.FC = () => {

    let user = useSelector((store: IAppState) => store.user);
    const token = useSelector((state: IAppState) => state.auth.AccessToken);

    const dispatch = useDispatch();


    const [handle, setHandle] = useState(user?.displayName);
    const [profileImg, setProfileImage] = useState(user?.profileImg);
    const [working, setWorking] = useState(false);


    async function submitForm() {
        if (working) return;
        setWorking(true);

        const body = {
            'dataType': 'user',
            'dataKey': user?.userName,
            'displayName': handle,
            'profileImg': profileImg
        }
        const headers = {
            Authorization: token
        }
        try {
            const userResult = await axios.put('https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/' + user?.userName, body, { headers });

            const newUser: IUser = {
                ...user,
                userName: userResult.data[0].dataKey,
                displayName: userResult.data[0].displayName,
                email: userResult.data[0].email,
                profileImg: userResult.data[0].profileImg,
            }

            console.log(newUser);

            dispatch({
                type: AppAction.UPDATE_USER,
                payload: { user: newUser }
            });

            Toast.show({
                type: "success",
                text1: "Submitted",
                text2: "Your new information has been submitted successfully"
            });
        }
        catch (err) {
            console.log(err.response)
            Toast.show({
                type: "error",
                text1: "Update Failed",
                text2: "Failed to update user data"
            })
        }
        setWorking(false);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
            <View style={styles.smallView}></View>
            <SafeAreaView style={styles.largeView}>
                <Card containerStyle={styles.cardActual}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.text}> Profile Settings </Text>
                    </View>

                    <View style={styles.topForm}>

                    </View>
                    <View style={styles.form}>
                        <TextInput style={styles.input}
                            placeholderTextColor="white" placeholder="Display Name" onChangeText={(text) => setHandle(text)} />
                    </View>
                    <View style={styles.form}>
                        <TextInput style={styles.input}
                            placeholderTextColor="white" placeholder="Link to Profile Image" onChangeText={(text) => setProfileImage(text)} />
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.button, working ? styles.working : styles.notWorking]} onPress={() => submitForm()}>
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
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    smallView: {
        flex: 1,
    },
    bottomView: {
        flex: 1
    },
    largeView: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    cardActual: {
        borderRadius: 10,
        borderColor: 'purple',
        borderWidth: 2,
        backgroundColor: 'rgb(33, 37, 41)',
        color: 'white',
    },

    topForm: {
        margin: 10
    },
    form: {
        margin: 10
    },

    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    text: {
        fontSize: 25,
        color: "white",
        fontFamily: "Montserrat",
        alignItems: 'center',
        textAlign: 'center',
    },
    input: {
        fontFamily: "Montserrat",
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
        marginVertical: 10,
        marginHorizontal: 25
    },
    buttonText: {
        fontSize: 20,
        fontFamily: "Montserrat",
        color: "white",
    },
    notWorking: {
        backgroundColor: 'purple'
    },

    working: {
        backgroundColor: 'grey'
    }
})

export default SettingsScreens;

