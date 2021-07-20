import * as React from 'react';
import Post from '../models/Post';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useState } from 'react';
import Likey from './images/liked-post.png'
import NotLikey from './assets/images/unliked-post.png'
import CommentIcon from './assets/images/comment-icon.png'

const PostCard = (props: Post) => {

    const[isLiked, setLikedState] = useState(false);



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
            <Pressable onPress={ () => setLikedState(true) }>
                <Image 
                    source={isLiked? Likey : NotLikey }
                    style={{ width: 70, height: 70}}
                />
            </Pressable>
            
            <Image
                source={{ uri: CommentIcon}}
                style={{ width: 70, height: 70}}
            />
            <Text>{props.timeStamp}</Text>

            </Card>
        </View>
    )
}

export default PostCard;

const styles = StyleSheet.create({



})