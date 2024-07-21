import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-2xl'>Profile</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})