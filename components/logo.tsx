import React from "react"
import {Image, StyleSheet, View, Text} from 'react-native'

const Logo: React.FC = (props: any) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/illuminati.png')}
      />
      {/* <Text style={styles.text}>Bohemian Grove</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignContent: "center",
    justifyContent: "center",
  },

  // text:{
  //   alignContent: "center",
  //   justifyContent: "center",
  //   color: "antiquewhite"
  // },

  logo:{
    width: 45, 
    height: 45,
    marginBottom:15
  }
})

export default Logo;