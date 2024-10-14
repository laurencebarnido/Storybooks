import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native';
import EmptyState from '../../components/EmptyState';


const DATA = [
  {
    id: 1,
    title: "Publish Books",
  },
  {
    id: 2,
    title: "Manage Reviews",
    

  },
  {
    id: 3,
    title: "Anlytics of the Books",
  },
];


const Item = ({title}) => (

  <TouchableOpacity className = "mx-3 mt-10 bg-gray-600 w-[250px] h-[50] justify-center items-center border rounded-2xl">
    <Text className = "text-white text-2xl font-psemibold">{title}</Text>

  </TouchableOpacity>
);


const Create = () => {
  return (
    <SafeAreaView className = "bg-new h-full">
      <View>
        <Text className = "text-white text-xl mt-20 font-psemibold">Share Your Books To Others</Text>
        <Text className = "text-white text-3xl ">Barnido</Text>
        <FlatList 
           data={DATA}
           renderItem={({item}) => <Item title={item.title} />}
           keyExtractor={item => item.id}

      horizontal  
    />
    <Text className = "text-2xl text-white mt-7">Published Books</Text>
    <EmptyState title= "No StoryBooks Found"
      subtitle= "Be the first one to upload"
      />
      
      </View>
    </SafeAreaView>
  )
}

export default Create