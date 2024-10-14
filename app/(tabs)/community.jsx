import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Topics from '../../components/Topics';

const DATA = [
  {
    id: 1,
    title: "Buddy",
    
  },
  {
    id: 2,
    title: "Galaysia",
    

  },
  {
    id: 3,
    title: "NGL FR FR",
    
  },
];

const Item = ({title}) => (

  <TouchableOpacity className = "mx-3 mt-10 bg-gray-600 w-[250px] h-[50] justify-center items-center border rounded-2xl">
    <Text className = "text-white text-2xl font-psemibold">{title}</Text>

  </TouchableOpacity>
);



const community = () => {
  return (
    <SafeAreaView className = "bg-new h-full">
        <Text className = "text-xl text-gray-600 mt-10 font-psemibold">StoryBooks</Text>
        <Text className = "text-3xl text-white  font-pregular">Barnido</Text>
        <Text className = "text-2xl text-white font-psemibold mt-10">Choose Your Favorite Books</Text>
        <View className = "justify-center items-center mt-10">
           <Topics 
             posts = {[{ title: "The Archer House"}, 
              {title: "The Lost BookShop" }, 
              {title: "Dont Believe Everything you Think"},
             
              {title: "The Golden Puck"},] ?? []}
           />
        </View>
    </SafeAreaView>
  )
}

export default community