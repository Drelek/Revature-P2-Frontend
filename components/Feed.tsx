import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "../screens/PostCard";


const Feed: React.FC = (props: any) => {


    const [postCards, setPostCards] = useState([]);


    return (
        <View style={styles.container}>
            <FlatList
                data={postCards}
                renderItem={({ item }) => <PostCard item={item}> </PostCard>}
                keyExtractor={(item, index) => index.toString()} />
        </View>
    )
}


export default Feed;

const styles = StyleSheet.create({
    container: {
        marginTop: 0
    },
    item: {
        // padding:10,
        color: "white"
    },
    text: {
        color: "white",
    }
})