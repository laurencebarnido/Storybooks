import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView} from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className = "bg-new h-full">
      <ScrollView contentContainerStyle = {{height:'100%'}}>
        <View className = "w-full justify-center items-center min-h-[85vh] px-4">
          <Image 
            source={images.text2}
            className = "w-[200px] h-[180px] mt-7"
            resizeMode="contain"
          />

         
          <Image 
            source={images.logo2}
            className = "max-2-[200px] w-[200] h-[250px]"
            resizeMode="contain"
          />
          
          <Image 
            source={images.cards}
            className = "max-2-[380px] w-full h-[200px]"
            resizeMode="contain"
          />

        

          <CustomButton 
            title= "Get Started"
            handlePress={() => {router.push('/sign-in')}}
            containerStyle= "w-full mt-1"
          />
        </View>

      </ScrollView>
      <StatusBar  backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}

