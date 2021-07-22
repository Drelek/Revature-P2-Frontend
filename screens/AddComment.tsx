import * as React from 'react';
import { Text, TextInput, StyleSheet, Pressable, Button, View } from 'react-native';
import { Card } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const AddComment = () => {

    const[newComment, setNewComment] = useState(' ');

    const postComment = () => {
        //TODO
        //Post comment to endpoint and refresh screen
    }

    return(
        <SafeAreaView>

            <Card containerStyle={styles.card}>
            <Text
                style={styles.header}
            >Add to the conversation: </Text>
            <View
                style={{paddingTop: 9, paddingBottom: 9 }}
            >
            <TextInput
                style={styles.inputbox}
                onChangeText={(text)=> setNewComment(text)}
            />

            </View>
            
            <Button
               title="Submit"
                onPress={() => postComment()}                
            />
            </Card>
        </SafeAreaView>
    )
}

export default AddComment;

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        color: "white"
    },
    inputbox: {
        backgroundColor: "rgb(220,220,220)",
        paddingTop: 9,
        paddingBottom: 9,
        borderColor: 'plum',
        borderWidth: 1,
        
    },
    card: {
        backgroundColor: 'rgb(33, 37, 41)',
        flex:1, 
        borderTopLeftRadius:20, 
        borderColor: 'plum', 
        borderWidth: 1,
        borderTopRightRadius:20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    }
})