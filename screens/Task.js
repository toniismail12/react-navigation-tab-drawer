import { View, Text, Button } from 'react-native'
import React from 'react'
import { global } from '../styles/global'

const Task = ({navigation, route}) => {

  console.log(route)
  
  const goToHome = () => {
      navigation.pop()
  }

  return (
    <View style={global.container}>

      <Text>{route.params.task}</Text>

      <Button title ="to Home" onPress={goToHome} />

    </View>
  )
}

export default Task