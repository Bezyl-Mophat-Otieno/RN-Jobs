import React from 'react'
import { View, Text ,TouchableOpacity , FlatList , ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { SIZES,COLORS } from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {

  const [data,error,isLoading] = useFetch('search',{
    query:"React Developer",
    num_pages:1
  })

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity style={styles.headerBtn} onPress={()=>router.push('/search')}>
        <Text style={styles.headerBtn}>View All</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.popularJobsContainer}>{
      isLoading ?  <ActivityIndicator size="large" color={COLORS.primary} /> :
      error ? <Text>Something went wrong...</Text> :
        <FlatList data={[1,2,3,4,5,6]}
         contentContainerStyle={{columnGap:SIZES.medium}}
         horizontal
        />}
    </View>

    </View>
  )
}

export default Popularjobs