import * as React from 'react';
import Post from '../models/Post';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useState } from 'react';

const PostCard = (props: any) => {

    const [isLiked, setLikedState] = useState(false);



    return (
        <View>
            <Card>
                <Image
                    source={{ uri: props.displayImg }}
                    style={{ width: 200, height: 200 }}
                />
                <Text>HolyGuack</Text>
                <Text>@guackholy</Text>
                <Text></Text>
                <Pressable onPress={() => setLikedState(true)}>
                    <Image
                        source={require('../assets/images/liked-post.png')}
                        style={{ width: 70, height: 70 }}
                    />
                </Pressable>

                <Image
                    source={require('../assets/images/comment-icon.png')}
                    style={{ width: 70, height: 70 }}
                />
                <Text>{props.timeStamp}</Text>

            </Card>
        </View>
    )
}

export default PostCard;

const styles = StyleSheet.create({



})