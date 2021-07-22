import React from "react"
import {Image, StyleSheet, View, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const MenuIcon: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.toggleDrawer()}>
      <View>
        <Image
        style={styles.logo}
        source={require('../assets/images/menuIcon.png')}/>
      </View>
    </Pressable>
    
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