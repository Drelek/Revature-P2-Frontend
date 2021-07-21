import React from "react"
import {Image, StyleSheet, View} from 'react-native'

const MenuIcon: React.FC = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require('../assets/images/menuIcon.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  logo:{
    width: 25, 
    height: 25,
    marginLeft:15
  }
})

export default MenuIcon;