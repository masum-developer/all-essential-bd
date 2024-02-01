import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

const Setting = () => {
    const navigation = useNavigation();
    const openDrawer=()=>{
        navigation.dispatch(DrawerActions.openDrawer())
    }
    return (
        <View>
            <Text>Setting</Text>
            <Button title="Drawer" onPress={openDrawer}/>
        </View>
    );
};

export default Setting;