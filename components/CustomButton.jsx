import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyle, textStyles, isLoading}) => {
  return (
   <TouchableOpacity 
   onPress={handlePress}
   activeOpacity={0.7}
   
   className = {`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
            disabled = {isLoading}
   >
        <Text className = {`text-white font-pextrabold text-lg justify-center items-center ${textStyles}`}>{title}</Text>
   </TouchableOpacity>
  )
}

export default CustomButton