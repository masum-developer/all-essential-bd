import React from 'react';
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
    return <Drawer>
        <Drawer.Screen
            name="home"
            options={{
                drawerLabel: 'Home',
                title: 'Home'
            }}

        />
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: 'About',
                title: 'Aboutnn'
            }}

        />
    </Drawer>
};

export default _layout;