import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../redux/store';
import { AppAction } from '../redux/actions';
import { View } from 'react-native';

function EffectCanvas() {
  const canvas = useSelector((state: IAppState) => state.canvas);
  const dispatch = useDispatch();
        useEffect(() => {
            let mounted = true;
            if(mounted){
                dispatch({type:AppAction.TOGGLE_CANVAS})
            }
            return () => {
                mounted = false;
            };
        },[])
    return <View></View>
}

export default EffectCanvas;