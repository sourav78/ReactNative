import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps{
    title: string,
    handlePress: () => void,
    containerStyles?: string,
    textStyle?: string,
    isLoading?: boolean
}

const CustomButton = ({title, handlePress, containerStyles, textStyle, isLoading}: CustomButtonProps) => {
  return (
    <TouchableOpacity 
        className={`bg-secondary rounded-xl px-8 py-4 ${containerStyles} ${isLoading && 'opacity-50'}`}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}
    >
        <Text className={`text-primary font-psemibold text-lg text-center ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton