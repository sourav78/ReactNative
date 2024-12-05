import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

interface EmptryStateProps{
  title: string,
  subTitle: string
}

const EmptyState = ({title, subTitle}:EmptryStateProps) => {
  return (
    <View className='justify-center items-center px-4'>
      <Image
        source={images.empty}
        className='w-64 h-52'
        resizeMode='contain'
      />
      <Text className='text-2xl font-psemibold text-white'>{title}</Text>
      <Text className='font-pmedium text-sm text-gray-100'>{subTitle}</Text>

      <CustomButton
        title='Create Video'
        handlePress={() => router.push("/create")}
        containerStyles='w-full my-5'
      />
    </View>
  )
}

export default EmptyState