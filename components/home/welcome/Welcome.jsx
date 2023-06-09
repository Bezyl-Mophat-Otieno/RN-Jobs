import React from 'react'
import { View, Text , TextInput , TouchableOpacity , FlatList , Image } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { icons , images , COLORS , SIZES } from '../../../constants'

import styles from './welcome.style'

const Welcome = () => {
  const router  = useRouter()
  const [activeJobType , setActiveJobType] = useState("PART TIME")
  const jobTypes = ["PART TIME","FULL TIME","CONTRACT"]
  return (
    <View >
    <View style={styles.container}>
         <Text style={styles.userName}>Bezyl Mophat</Text>
         <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
    </View>
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput placeholder="What are you looking for ?" value='' onChange={()=>{}} style={styles.searchInput}/>
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
        <Image source={icons.search} style={styles.searchBtnImage} resizeMode='contain'/>
      </TouchableOpacity>
    </View>
    <View style={styles.tabsContainer}>
      <FlatList data={jobTypes} horizontal contentContainerStyle={{columnGap:SIZES.small}} showsHorizontalScrollIndicator={false} keyExtractor={(item , index)=>index.toString()} 
      renderItem={({item})=>(
      <TouchableOpacity style={styles.tab(activeJobType,item)}
        onPress={()=>{
         setActiveJobType(item)
         router.push(`/search/${item}`)}}
         >
         <Text style={styles.tabText(activeJobType,item)}>{item}</Text></TouchableOpacity>
      )
      }/>
    </View>
   

    </View>
  )
}

export default Welcome