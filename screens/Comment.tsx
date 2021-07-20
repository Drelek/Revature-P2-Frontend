import * as React from 'react';
import { Comment } from '../models/Comment';
import { View, Text, StyleSheet } from 'react-native'

const Comment = (props: Comment) => {

    return(
        <View>
            <Text>{props.comment}</Text>
        </View>

    )
}
export default Comment;

const styles = StyleSheet.create({

})

