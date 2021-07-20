
import React from "react";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Feed: React.FC = (props: any) => {

    const DATA = [
        {
            id: 0,
            title: "string"
        },
        {
            id: 1,
            title: "String"
        }
    ];

    const renderItem = (item: any) => (
        //<Text style={styles.item}> {item.title}  </Text>
        <Text style={styles.item}> HELLO WORLD</Text>
    );

    return (
        <SafeAreaView>
            <FlatList data={DATA} renderItem={renderItem} />

        </SafeAreaView>
    )
}


export default Feed;

const styles = StyleSheet.create({
    item: {
        color: "white"
    }
})