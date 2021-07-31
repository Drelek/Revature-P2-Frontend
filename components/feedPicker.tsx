import React, {useState}from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import GlobalEye from './globalEye';
import FollowIcon from './followIcon';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../redux/store';
import { AppAction } from '../redux/actions';

const FeedPicker:React.FC = () => {
  const currentFeed = useSelector((state: IAppState) => state.feed);
  const dispatch = useDispatch();
  const [feedIcon, setFeedIcon] = useState("global");
  const navigation = useNavigation();

  const renderFeedIcon = () =>{
    if (currentFeed){
      return <GlobalEye/>
    } else {
      return <FollowIcon/>
    }
  }
  //we will to change state and also push new data to render cards
  const stateChange = () => {
    dispatch({
      type: AppAction.TOGGLE_FEED,
      payload: {}
    });
  };

  return (
    <TouchableOpacity
      onPress={() => stateChange()}>
      {renderFeedIcon()}
    </TouchableOpacity>
  )
  
}

const styles = StyleSheet.create({
  container:{

  }
})



export default FeedPicker;