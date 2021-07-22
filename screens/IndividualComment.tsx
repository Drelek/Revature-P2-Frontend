import * as React from 'react';
import { Comment, iComment } from '../models/Comment';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const IndividualComment = (props: any) => {

    return(

        <Card
            containerStyle={styles.card}
        >
            <View
                style={styles.container}
            >
                <Text
                    style={styles.comment}
                >{props.comment}</Text>
            </View>
        </Card>
        

    )
}
export default IndividualComment;

const styles = StyleSheet.create({
    comment: {
        fontSize: 16,
        color: "white"
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: "rgb(220,220,220)",
    },
    card: {
        borderTopLeftRadius:20, 
        borderColor: 'plum', 
        borderWidth: 1,
        borderTopRightRadius:20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    }
})

