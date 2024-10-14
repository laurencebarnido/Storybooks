import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { router } from 'expo-router';


const profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className = "text-3xl font-pblack text-blue-800 mb-7">profile</Text>
      
      <Image
       source={images.boy}
      />
      <Text className="mt-7">Barnido</Text>
      
      

    </View>
  )
}

export default profile

