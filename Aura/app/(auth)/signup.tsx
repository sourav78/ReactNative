import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'
import { registerSchema } from '@/constants/schema'
import { useGlobalContext } from '@/context/GlobalProvider'

const Signup = () => {

  const {setUser, setIsLoggedIn} = useGlobalContext()

  const [form, setForm] = useState<registerSchema>({
    username: "",
    email: "",
    password: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {

    if(!form.email || !form.password || !form.username){
      Alert.alert("Error", "Please fill all the fields.")
    }

    setIsSubmitting(true)

    try{
      const result = await createUser({email: form.email, password: form.password, username: form.username})
      setUser(result)
      setIsLoggedIn(true)

      router.replace("/home")
    }catch(error: any){
      Alert.alert("Error", error?.message)
    }finally{
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full min-h-[85vh] justify-center px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-28 h-9'
          />
          <Text className='text-2xl text-white font-psemibold mt-10'>Signup on Aura</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e:string) => setForm({...form, username: e})}
            otherStyle="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e:string) => setForm({...form, email: e})}
            otherStyle="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e:string) => setForm({...form, password: e})}
            otherStyle="mt-7"
          />

          <CustomButton
            title='Sign up'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-7 flex-row gap-2'>
            <Text className='text-lg font-pregular text-gray-100 '>Already have an account?</Text>
            <Link href={"/signin"} className='text-lg font-psemibold text-secondary-100'>Signin</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup