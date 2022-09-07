
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutStack, HomeStack, TaskStack } from './MyStack';
import MyTab from './MyTab';

const ScreenOptionStyle = {
  
    headerShown: false

}

const MyDrawer = () => {

    const Drawer = createDrawerNavigator ()

    return (
       <Drawer.Navigator screenOptions={ScreenOptionStyle}>
           <Drawer.Screen name="Home" component = {MyTab} />
           <Drawer.Screen name="About" component = {AboutStack} />
       </Drawer.Navigator>

    )
}

export default MyDrawer