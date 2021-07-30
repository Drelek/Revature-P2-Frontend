import axios from 'axios';
import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Card } from 'react-native-elements';

const IndividualComment = (props: any) => {
    const item = {
        displayImg: props.item.displayImg.S,
        comment: props.item.comment.S,
        displayName: props.item.displayName.S,
        commentStamp: props.item.commentStamp.N
    }
    
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
                <Image
                    source={{uri:`${displayImg}`}}
                    style={styles.imageContainer}
                />
            </View>

            <View style={styles.dataContainer}>

                <View style={styles.nameTimeContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.displayName}>{displayName}</Text>
                    </View>

                    <View style={styles.timeContainer}>
                        <Text style={styles.timeStamp}>{timeStamp}</Text>
                    </View>
                </View>
               
               <View style={styles.commentContainer}>
                    <Text style={styles.comment}>{comment}</Text>
               </View>

            </View>
            
            

        </Card>
    )
}
export default IndividualComment;

const styles = StyleSheet.create({
    card: {
        borderColor: 'purple', 
        borderWidth: 2,
        borderRadius:10,
        backgroundColor:"rgb(33, 37, 41)"
    },

    container: {
        flex: 1,
        flexDirection:"row",
        borderRadius:2,
        borderColor: 'purple',
    },    

    imageContainer: {
        flex:1,
    },

    dataContainer: {
        flex:4,
        flexDirection:"column"
    },

    nameTimeContainer: {
        flex:1,
        flexDirection:"row",
        justifyContent: "space-around",
        marginBottom:5,
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor: 'purple'
    },

    nameContainer:{
        flex:1
    },

    timeContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end"
    },

    commentContainer:{
        flex:1
    },

    comment: {
        fontSize: 14,
        color: "white",
    },

    displayName: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold",
    },

    timeStamp: {
        fontSize: 14,
        color: "white",
    },
    
    defaultProfileImage:{
        height:40,
        width:40,
        borderRadius: 100,
        backgroundColor:'purple',
        borderWidth:2,
        borderColor: 'purple',
    },
    profileImage: {
        height:40,
        width:40,
        borderRadius: 100,
        backgroundColor:'purple',
        borderWidth:2,
        borderColor: 'purple',
    },
})

