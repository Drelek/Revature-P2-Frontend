import React, {useState}from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import GlobalEye from './globalEye';
import FollowIcon from './followIcon';
import { useNavigation } from '@react-navigation/native';

const FeedPicker:React.FC = () => {
  const [feedIcon, setFeedIcon] = useState("global");
  const navigation = useNavigation();

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
      setFeedIcon("follower");
    } else if (feedIcon === "follower"){
      setFeedIcon("global");
    }
  };

  return (
    <TouchableOpacity
      onPress={() => stateChange()}>
      {renderFeedIcon}
    </TouchableOpacity>
  )
  
}

const styles = StyleSheet.create({
  container:{

  }
})



export default FeedPicker;