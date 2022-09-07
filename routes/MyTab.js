
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutStack, HomeStack } from './MyStack'
import Ionicons from '@expo/vector-icons/Ionicons'

const ScreenOptionStyle = {
  
  headerShown: false

}

const MyTab = () => {

  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'information-circle' : 'ios-information-circle-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="About" component={AboutStack} />
    </Tab.Navigator>
  )
}

export default MyTab