import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CustomDrawwerContent from '../components/customDrawwerContent';


const _layout = () => {
    return <Drawer 
        screenOptions={{
            drawerLabelStyle:{
                marginLeft:-20
            },
            drawerActiveBackgroundColor:'gray',
            drawerActiveTintColor:'white'
        }}
      
        drawerContent={CustomDrawwerContent}
    >
        <Drawer.Screen
            name="home"
            options={{
                drawerLabel: 'Home',
                title: 'Home',
                drawerIcon:({size,color})=>(
                    <FontAwesome name="home" size={size} color={color} />
                )
            }}

        />
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: 'About',
                title: 'About',
                drawerIcon:({size,color})=>(
                    <Entypo name="info-with-circle" size={size} color={color} />
                )
            }}

        />
          <Drawer.Screen
            name="contact"
            options={{
                drawerLabel: 'Contact',
                title: 'Contact',
                drawerIcon:({size,color})=>(<AntDesign name="contacts" size={size} color={color} />)
            }}

        />
    </Drawer>
};

export default _layout;