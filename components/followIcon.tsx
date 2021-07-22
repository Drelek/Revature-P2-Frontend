import React from "react"
import {Image, StyleSheet, View} from 'react-native'

const FollowIcon: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/followIcon.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignContent: "center",
    justifyContent: "center",
  },

  logo:{
    width: 25, 
    height: 25,
    marginRight:15
  }
})

export default FollowIcon;