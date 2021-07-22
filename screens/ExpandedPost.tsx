import * as React from 'react';
import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import IndividualComment from './IndividualComment';
import AddComment from './AddComment';
import PostCard from './PostCard';

const ExpandedPost = (props : string) => {

    const[timeStamp, setTimeStamp] = useState(props);
    //TODO 
    //Use timestamp to pull post in question from database

    const [commentList, setCommentList]  = useState([ {
        comment: "A comment over here" 
    },
    {
        comment: "A comment over there"
    },
    {
        comment: "A comment everywhere"
    }]);

    

    return (
        
        <View>
            <ScrollView>
                <FlatList 
                    data={commentList}
                    renderItem={({item}) => 
                        <IndividualComment item={item}></IndividualComment>
                    }    
                />

                <AddComment></AddComment>
            </ScrollView>

        </View>
    )
}

export default ExpandedPost;