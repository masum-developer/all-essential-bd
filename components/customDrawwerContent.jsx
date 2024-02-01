import React from 'react'
import { Image, Text, View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

export default function CustomDrawwerContent(props) {
    const {bottom} = useSafeAreaInsets();
    const navigation = useNavigation();
    const closeDrawer = ()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
    }
    return (
        <View style={{flex:1}}>
             <DrawerContentScrollView {...props}>
                <View>
                    <Image source={require('../assets/images/logo.png')}/>
                </View>
        <DrawerItemList {...props}/>
       
    </DrawerContentScrollView>
    <Pressable onPress={closeDrawer} style={{padding:20, paddingBottom:bottom+10}}>
    <Image style={{height:10}} source={require('../assets/images/logout.png')}/>
    {/* <Text>Logout</Text> */}
        </Pressable>
        </View>
    )
}
