import { View, Text, TextInput, StyleSheet, Pressable, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react';
import { Card } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../redux/store';
import axios from 'axios';
import { AppAction } from '../redux/actions';

const SettingsScreens: React.FC = () => {

    let user = useSelector((store: IAppState) => store.user);
    const token = useSelector((state: IAppState) => state.auth.AccessToken);

    const dispatch = useDispatch();


    const [handle, setHandle] = useState(user?.displayName);
    const [profileImg, setProfileImage] = useState(user?.profileImg);


    async function submitForm() {
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
            const res = await axios.put('https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/user/' + user?.userName, body, { headers });

            const updatedUser = {
                'userName': user?.userName,
                'displayName': handle,
                'profileImg': profileImg
            }


            dispatch({
                type: AppAction.UPDATE_USER,
                payload: { user: updatedUser }
            })
            user = useSelector((store: IAppState) => store.user);
        }
        catch (err) {

            console.log(err.response)
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <View style={styles.smallView}></View>
            <SafeAreaView style={styles.largeView}>
                <Card containerStyle={styles.cardActual}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.text}> Change your handle/profile image </Text>
                    </View>

                    <View style={styles.form}>
                        <TextInput style={styles.input}
                            placeholderTextColor="white" placeholder={user?.displayName} onChangeText={(text) => setHandle(text)} />
                    </View>
                    <View style={styles.form}>
                        <TextInput style={styles.input}
                            placeholderTextColor="white" placeholder="Profile image" onChangeText={(text) => setProfileImage(text)} />
                    </View>
                    <View>
                        <Pressable style={styles.button} onPress={() => submitForm()}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </Pressable>
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
        fontFamily: "BadScript",
        alignItems: 'center',
        textAlign: 'center',
    },
    input: {
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
        marginVertical: 10,
        marginHorizontal: 25
    },
    buttonText: {
        fontSize: 20,
        fontFamily: "BadScript",
        color: "white",
    }
})

export default SettingsScreens;

