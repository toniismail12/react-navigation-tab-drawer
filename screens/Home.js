import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { global } from '../styles/global'

const Home = ({ navigation }) => {
  
   const [tasks, SetTasks] = useState([
    {"task":"HTML I","done":true},
    {"task":"CSS","done":true},
    {"task":"Responsive design","done":true},
    {"task":"Git","done":true},
    {"task":"JavaScript I","done":true},
    {"task":"JavaScript II","done":false}
   ])

  return (
    <View style={global.container}>
     
        <FlatList
            data={tasks}
            renderItem = {({ item }) => (
               <TouchableOpacity onPress={()=>navigation.navigate("Task", item)}>
                  <Text> { item.task } </Text>
               </TouchableOpacity>
               
            )}
        />
    </View>
  )
}

export default Home