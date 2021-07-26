import React,{ useState } from 'react';
import { SafeAreaView } from 'react-native';
import Feed from '../components/Feed'
import Post from '../models/Post';


const HomeFeedScreen: React.FC = (props: any) => {
    const user = "user";
    const array: Post[] = [];

    const [posts, setPosts] = useState(array);


    return (
        <SafeAreaView>
            <Feed></Feed>
        </SafeAreaView>
    )
}

export default HomeFeedScreen