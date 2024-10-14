import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { router } from 'expo-router';

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: ""
  })

  const [isSubmitting, setisSubmitting] = useState(false)


  const submit = () => {

  }

  return (
    <SafeAreaView className = "bg-new h-full justify-center items-center flex-1">
      <ScrollView>
        <View className = "w-full justify-center min-h-[85vh] px-4 my-6">
          
          <Text className = "text-2xl text-gray-600 mt-10 font-psemibold justify-center items-center">
             {' '}
            <Text className = "text-gray-600 justify-center items-center font-pbold">LOG IN</Text>
          </Text>

          <FormField 
          title = "Email"
          value = {form.email}
          handleChangeText = {(e) => setform({...form, email: e})}
          otherStyles = "mt-7"
          keyboardType = "email-address"
          />

          <FormField 
          title = "Password"
          value = {form.password}
          handleChangeText = {(e) => setform({...form, password: e})}
          otherStyles = "mt-7"
          />
          
          <CustomButton 
            title = "Sign In"
            handlePress = {submit}
            containerStyle = "mt-7"
            isLoading = {isSubmitting}
          />

          <View className = "justify-center pt-5 flex-row gap-2">
              <Text className = "text-lg text-white font-pregular">
                Don't have account ?
              </Text>
              <Link href="/sign-up" 
                  className= "text-lg font-semibold text-green-600">Sign Up</Link>
              <Link href="/home">Go to Home</Link>
                  

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn