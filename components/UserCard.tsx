import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const UserCard = (props: any) => {

    return (
        <View style={styles.userContainer}>
            <Image
                source={{ uri: `${props.item.profileImg.S}` }}
                style={styles.image} />

            <View style={{ marginRight: 30, marginTop: 20 }}>
                <Text
                    style={styles.displayName}
                >{props.item.displayName.S}</Text>
                <Text
                    style={styles.username}
                >{"@" + props.item.dataKey.S}</Text>

            </View>
            <View style={{ marginRight: 30, marginTop: 20 }}>
                <Text
                    style={styles.username}>
                    Followers</Text>
                <Text
                    style={styles.username}
                >{props.item.followers.SS.length - 1}</Text>
            </View>
        </View>
    )

}
export default UserCard

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "purple",
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "flex-start",
        alignItems: "flex-start",

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

        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: 'rgb(33, 37, 41)',
        borderRadius: 10,
        borderColor: 'purple',
        borderWidth: 5,
        marginBottom: 15,
        marginTop: 15,
        marginHorizontal: 15,
    },

})