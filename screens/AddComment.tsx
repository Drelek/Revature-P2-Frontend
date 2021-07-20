import * as React from 'react';
import { Text, TextInput, StyleSheet, Pressable, Button } from 'react-native';
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
            <Text>Add to the conversation: </Text>
            <TextInput
                onChangeText={(text)=> setNewComment(text)}
            />
            <Pressable
                
            >
                <Button
                    title="Submit"
                    onPress={() => postComment()}                
                />

                
            </Pressable>

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})