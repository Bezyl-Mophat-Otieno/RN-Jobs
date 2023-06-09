import React from 'react'
import { useState } from 'react'
import { View , Text , ScrollView , SafeAreaView} from 'react-native'
import { useRouter , Stack } from 'expo-router'
import {images ,icons,COLORS,SIZES} from '../constants'
import {Nearbyjobs , Welcome , Popularjobs , ScreenHeaderBtn } from '../components'


function Home() {
  const router = useRouter()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen options={{
        headerStyle:{backgroundColor:COLORS.white},
        headerShadowVisible:false,
        headerLeft:()=>(
          <ScreenHeaderBtn iconUrl={icons.menu} dimensions={"60%"}/>
        )
        ,
        headerRight:()=>(
          <ScreenHeaderBtn iconUrl={images.profile} dimensions={"100%"}/>
        ),
        headerTitle:""
      }} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex:1,padding:SIZES.medium}}>
        <Welcome/>
        <Nearbyjobs/>
        <Popularjobs/>
      </View>
      </ScrollView>
      
    </SafeAreaView>

  )
}

export default Home
