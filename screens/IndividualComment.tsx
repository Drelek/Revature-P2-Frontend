import axios from 'axios';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const IndividualComment = (props: any) => {
    const {displayImg, comment, displayName, commentStamp, timeStamp} = props.item

    //Delete a comment
    //Requires timeStamp of post and commentStamp of the comment
    const deleteComment = async() => {
        await axios.delete(`https://w822121nz1.execute-api.us-east-2.amazonaws.com/Prod/post/${timeStamp}/${commentStamp}`, {
            headers: {
                Authorization: "TokenToBePulledFromState"
            }
        }).then(resp => {
            //Response returns deleted comment...
        })
    }
    // const renderProfileImageOrDefault = (displayImg:string) => {
    //     if (!displayImg) {
    //         return (
    //             <Image
    //                 source={require('../assets/images/illuminati.png')}
    //                 style={styles.defaultProfileImage}
    //             />
    //         )
    //     } else {
    //         return (
    //             <Image
    //                 source={{uri:`${displayImg}`}}
    //                 style={styles.profileImage}
    //             />
    //         )
    //     }
    // }

    return(

        <Card
            containerStyle={styles.card}
        >
            <View
                style={styles.container}
            >
                <Text
                    style={styles.comment}
                >{comment}</Text>
            </View>
        </Card>
        

    )
}
export default IndividualComment;

const styles = StyleSheet.create({
    comment: {
        fontSize: 14,
        color: "white",
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',

    },
    card: {
        borderColor: 'purple', 
        borderWidth: 1,
        borderRadius:10,
        backgroundColor:"rgb(33, 37, 41)"
    },
    defaultProfileImage:{

    },
    profileImage: {},
})

