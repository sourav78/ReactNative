import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface FormFieldProps {
  value: string;
  handleChangeText: (e: string) => void;
  otherStyle?: string;
  keyboardType?: string;
  placeHolder?: string;
}

const SearchInput = ({
  value,
  handleChangeText,
  otherStyle,
  placeHolder,
}: FormFieldProps) => {

  return (
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
        <TextInput
          className="flex-1 text-white font-pregular text-base mt-0.5"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
        />
        
        <TouchableOpacity>
            <Image
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"
            />
        </TouchableOpacity>
      </View>
  );
};

export default SearchInput;
