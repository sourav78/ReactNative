import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function _layout() {

  const {isLoading, isLoggedIn} = useGlobalContext()

  if(!isLoading && isLoggedIn) return <Redirect href={"/home"}/>

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full px-4 justify-center items-center min-h-[85vh] ">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover endless posibility with{" "}
              <Text className="text-secondary-200">Aura</Text>
            </Text>

            <Image
              source={images.path}
              className="w-32 h-4 absolute -bottom-2 -right-2"
              resizeMode="contain"
            />
          </View>

          <Text
            className="text-gray-100 text-sm font-pregular mt-7 text-center"
          >Where creativity meets innovation: embark on a journy of limitless exploration with Aura</Text>

          <CustomButton
            title="Coutinue With Email"
            handlePress={() => router.push("./signin")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
