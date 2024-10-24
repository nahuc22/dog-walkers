import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../utils/appColors'

export default function SearchField({placeholder}) {
  return (
    <View style={{ borderRadius: scale(10) , backgroundColor: appColors.lightGray , flexDirection: 'row', justifyContent:'space-between', height: scale(43), alignItems:'center', padding: scale(10)}}>
        <MaterialIcons name="place" size={scale(20)} color={appColors.placeHolderColor}/>
        <TextInput style={{ flex: 1 , fontSize: scale(17)}} placeholderTextColor={appColors.gray} placeholder={placeholder}/>
        <MaterialIcons name="tune" size={scale(20)} color={appColors.placeHolderColor}/>
    </View>
  )
}
