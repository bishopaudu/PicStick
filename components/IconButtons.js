import React from 'react'
import { View ,Pressable,StyleSheet,Text} from 'react-native'
import  MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function IconButtons({name,label,onPress}) {
  return (
    <View>
      <Pressable style={styles.IconButton} onPress={onPress}>
        <MaterialIcons name={name} size={25}></MaterialIcons>
        <Text style={styles.iconLabel}>{label}</Text>
    </Pressable>
  </View>

  )
   }

const styles = StyleSheet.create({
    iconButton:{
        justifyContent:'center',
        alignContent:'center',
    },
    iconLabel: {
        color:'#fff',
        marginTop: 12,
    },
  
})
