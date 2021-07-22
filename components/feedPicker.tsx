import React, {useState}from 'react';
import {StyleSheet, Pressable} from 'react-native';
import GlobalEye from './globalEye';
import FollowIcon from './followIcon';

const FeedPicker:React.FC = () => {
  const [feedIcon, setFeedIcon] = useState("global");

  const renderFeedIcon = () =>{
    if (feedIcon === "global"){
      return <GlobalEye/>
    } else if (feedIcon === "follower"){
      return <FollowIcon/>
    }
  }
  //we will to change state and also push new data to render cards
  const stateChange = () => {
    if (feedIcon === "global"){
      setFeedIcon("follower")
    } else if (feedIcon === "follower"){
      setFeedIcon("global")
    }
  };

  return (
    <Pressable
      onPress={() => stateChange()}>
      {renderFeedIcon}
    </Pressable>
  )
  
}

const styles = StyleSheet.create({
  container:{

  }
})



export default FeedPicker;