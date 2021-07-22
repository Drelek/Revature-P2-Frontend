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
                >Another Comment over here</Text>
            </View>
        </Card>
        

    )
}
export default IndividualComment;

const styles = StyleSheet.create({
    comment: {
        fontSize: 16,
        color: "black"
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        
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

