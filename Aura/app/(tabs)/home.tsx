import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'
import { getAllPost } from '@/lib/appwrite'

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

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [refresing, setRefresing] = useState<boolean>(false)

  useEffect(() => {


    const fetchData = async () => {
      setIsLoading(true)
      try{
        const response = await getAllPost()

        console.log(response);
        
        // setData(response)
      }catch(error:any) {
        Alert.alert(error.message)
      }finally{
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const onRefresh = async () => {
    setRefresing(true)

    //Logic

    setRefresing(false)
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
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

            {/* <SearchInput
              placeHolder='Search videos'
            />  */}

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>Latest videos</Text>

              <Trending posts={tempData ?? []}/>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subTitle="Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refresing} onRefresh={onRefresh}/>}
      />
      
    </SafeAreaView>
  )
}

export default Home