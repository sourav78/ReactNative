import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

export default function _layout() {
  return (
    <View style={styles.container}>
      <Text className='text-4xl'>Hello react native</Text>
      <StatusBar style='auto'/>
      <Link href={"/profile"} style={{color: "blue"}}>Profile</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})