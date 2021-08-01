import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Card } from 'react-native-elements'

const UserCard = (props: any) => {

    return (
        
        <Card containerStyle={styles.userContainer}>
        <View style={{ flexDirection: "row" }}>
            <View style={styles.imageContainer}>
                <Image
                source={{ uri: `${props.item.profileImg.S}` }}
                style={styles.image} />
            </View>
            

            <View style={styles.rightContainer}>
                <View style={styles.names}>
                    <Text
                    style={styles.displayName}
                    >{props.item.displayName.S}</Text>
                    <Text
                    style={styles.username}
                    >{"@" + props.item.dataKey.S}</Text>
                </View>

                <View style={styles.follow}>
                    <Text
                    style={styles.username}>
                    {`Followers: ${props.item.followers.SS.length - 1}`}</Text>
                </View>
        
            </View>

            
        </View>
        </Card>
    )

}
export default UserCard

const styles = StyleSheet.create({
    imageContainer:{
        flex:1
    },
    rightContainer: {
        flex:2
    },
    names:{
        flex:2
    },

    follow:{
        flex:1
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "purple",
        borderWidth: 2,
        borderColor: "purple",

    },
    displayName: {
        fontWeight: "bold",
        fontSize: 22,
        color: "white",
        paddingLeft: 15,
        marginBottom: 5,

    },
    username: {
        fontSize: 18,
        color: "white",
        paddingLeft: 15,
        marginBottom: 5
    },
    userContainer: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'rgb(33, 37, 41)',
        borderRadius: 10,
        borderColor: 'purple',
        borderWidth: 4,
        marginBottom: 15,
        marginTop: 15,
        marginHorizontal: 15,
    },

})