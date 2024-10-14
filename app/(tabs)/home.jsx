import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native';
import { icons, images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import VideoCard from '../../components/VideoCard';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';


const DATA = [
  {
    id: 1,
    title: "SpiFire Storm",
    image:  images.storm,
    creator: "Kyle",
  },
  {
    id: 2,
    title: "Ghost country",
    image:  images.country,
    creator: "Dazo",

  },
  {
    id: 3,
    title: "Kingdom of Sorrow",
    image:  images.sorrow,
    creator: "Niel Ryan",
  },
];



const Item = ({title, image, creator}) => (
  <TouchableOpacity className = "flex-col items-center mb-7 bg-new">
         <View className = "w-full h-40 rounded-xl mt-5 relative justify-center items-center">
            <Image 
                source={image}
                className = "w-full h-full mb-7"
                resizeMode="cover"
            />
        </View>
        <View className = "flex-row gap-3 items-start ml-0.5">
            <View className = "justify-center items-center flex-row flex-1">
                <View className = "w-[46px] h-[46px] rounded-lg border border-white justify-center items-center p-0.5 mt-7">
                    <Image source={image}
                        className = "w-full h-full rounded-lg "
                        resizeMode="stretch"
                    />
                </View>
                <View className = "justify-center flex-1 ml-3 gap-y-1 mt-1">  
                    <Text className = "text-white font-pextrabold text-2xl" numberOfLines={1}> 
                        {title}
                    </Text>
                    <Text className = "text-xl text-white font-pregular " numberOfLines={1}>
                        {creator}
                    </Text>
                </View>
            </View>
        </View>
       
    </TouchableOpacity>
);




const Home = () => {

  const [refreshing, setrefreshing] = useState(false)

  const onRefresh = async () => {
    setrefreshing(true);
    //re call videos -> if any new videos appeard
    setrefreshing(false);
  }

  return (
    <SafeAreaView className = "bg-new  h-full">
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} image={item.image} creator={item.creator}/>}
      

      ListHeaderComponent={() => (
        <View className = "my-6 px-4 space-y-6 flex-1 justify-center ">
          <View className = "justify-between items-start flex-row mb-6">
            <View>
              <Text className = "font-psemibold text-sm text-white justify-center items-center">StoryBooks</Text>
              <Text className = "text-2xl font-pregular text-gray-600">Barnido</Text>
            </View>
            <TouchableOpacity className = "mt-1.5">
            <Link href='profile' className='text-lg font-pblack text-green-400'>Profile</Link>
            </TouchableOpacity>
          </View>
          <SearchInput />

          <View className = "w-full flex-1 pt-5 pb-7">
            <Text className = "text-white text-lg font-psemibold mb-3">Popular Storybook</Text>
            <Trending 
              posts = {[{ title: "The Archer House", appPic: images.png}, 
                {title: "The Lost BookShop", appPic: images.lost }, 
                {title: "Dont Believe Everything you Think", appPic: images.think},
                {title: "The Golden Puck", appPic: images.pack},] ?? []}
            />
          </View>
          <Text className = "text-white text-lg font-psemibold mb-3">New Release Books</Text>
        </View>
      )}

      ListEmptyComponent={() => (
        <EmptyState 
          title = "No books Found"
          subtitle = "Be the firt one to publish Books"
        />
      )}
      refreshControl={<RefreshControl 
        refreshing = {refreshing} onRefresh={onRefresh}
      />}
    />
  </SafeAreaView>
  )
}

export default Home