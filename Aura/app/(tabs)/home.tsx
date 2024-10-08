import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'

const tempData = [
  {
    $id: '1',
    name: "geor"
  },
  {
    $id: '2',
    name: "sdfsd"
  },
  {
    $id: '3',
    name: "cxvs"
  },
]

const Home = () => {
  return (
    <SafeAreaView className='bg-primary'>
      <FlatList
        data={tempData}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <Text className='text-3xl text-white'>{item.$id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>Welcome back</Text>
                <Text className='text-2xl font-psemibold text-white'>Sourav78</Text>
              </View>

              <View>
                <Image 
                  source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode='contain'
                />
              </View>
            </View>

            <SearchInput
              placeHolder='Search videos'
            /> 

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>Latest videos</Text>

              <Trending posts={tempData ?? []}/>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text></Text>
        )}
      />
      
    </SafeAreaView>
  )
}

export default Home