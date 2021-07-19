import * as React from 'react';
import Post from '../models/Post';
import { View, Text, Image,  } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const SingleCard = (props: Post) => {
    return (
        <View>
            <Card>
            <Image
                source={{ uri: props.displayImg }}
                style={{ width: 200, height: 200 }}
            />
            <Text>{props.displayName}</Text>
            <Text>{props.displayName}</Text>
            <Text>{props.postBody}</Text>
            <Image 
                source={{ uri: ' ' }}
                style={{ width: 70, height: 70}}
            />
            <Image
                source={{ uri: ' '}}
                style={{ width: 70, height: 70}}
            />
            <Text>{props.timeStamp}</Text>

            </Card>
        </View>
    )
}