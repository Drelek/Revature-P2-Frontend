import React from "react";
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuIcon: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <View>
        <Image
        style={styles.logo}
        source={require('../assets/images/menuIcon.png')}/>
      </View>
    </TouchableOpacity>
    
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