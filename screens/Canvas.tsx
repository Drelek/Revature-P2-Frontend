import { View } from "react-native";
import Canvas from "react-native-canvas";
import { useSelector } from "react-redux"
import handleCanvas from "../components/canvas";
import { IAppState } from "../redux/store"
import { StyleSheet } from "react-native";
import React from 'react';

const CanvasScreen: React.FC = (props: any) => {
    const canvasToggle = useSelector((state: IAppState) => state.canvas);

    return (
        <View style={styles.canvas}>
            {canvasToggle && <Canvas ref={handleCanvas}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    canvas:{
      flex:1,
      position: "absolute",
      zIndex: -1,
      elevation: -1
    }
  });

  export default CanvasScreen;