import { Tabs } from 'expo-router';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const _layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon:({size,color})=>(<Ionicons name='home' size={size} color={color} />)
                }}
             />
              <Tabs.Screen
                name="settings"
                options={{
                    tabBarIcon:({size,color})=>(<Ionicons name='settings' size={size} color={color} />)
                }}
             />
             <Tabs.Screen
                name="notification"
                options={{
                    tabBarIcon:({size,color})=>(<Ionicons name='notifications' size={size} color={color} />)
                }}
             />

        </Tabs>
    );
};

export default _layout;