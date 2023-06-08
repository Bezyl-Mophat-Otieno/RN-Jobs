import React from 'react'
import { View , Text , StyleSheet, FlatList } from 'react-native'
import { useState } from 'react'
import { RefreshControl } from 'react-native'

function index() {
  const [items , setItems ] = useState([
    {key:1,name:"Joe"},
    {key:2,name:"MOphat"},
    {key:3,name:"Kendrick"},
    {key:4,name:"lamar"},
    {key:5,name:"Lama"},
    {key:6,name:"Dev"},
    {key:7,name:"Java"},
    {key:8,name:"Html"},
    {key:9,name:"JS"},
  ])
  const [Refresh , setRefresh ] = useState(false)
  const onRefresh = ()=>{
  setRefresh(true)
  setItems([...items,{key:10,name:"React"}])
  setRefresh(false)
    
  }
  return (

    <FlatList data={items} keyExtractor={(item , index)=> index.toString()} renderItem={({item})=>
      <View style={styles.container}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    } refreshControl={
      <RefreshControl refreshing={false} onRefresh={onRefresh}colors={["green"]} />
    } />

      
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 20,
    margin: 10,
  },
  text: {
    padding: 10,
    margin: 10,
    color:"white"

  }
});

export default index
