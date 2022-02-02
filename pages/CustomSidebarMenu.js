import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-native/drawer'


const CustomSidebarMenu = () => {
  return (
    <SafeAreaView style = {{flex :1}}>
    <Image
    source = {require('../asset/react_logo.png')}
    style = {styles.sideMenuProfileIcon}
    /> 
    <DrawerContentScrollView {...props}>
        <DrawerItemList {..props}/>
        <DrawerItem
        label = "Visit US"
        onPress = {()=> Linking.openURL('https://it.tni.ac.th')}
        />
        <View style = {styles.customItem}>
        <TextonPress = {()=> Linking.openURL('https://it.tni.ac.th')}>
        Rate Us
        </Text>
        <Image
       source = {require('../asset/star_filled.png')}
       style = {styles.customItem}
        />
        </View>
    </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;

const styles = StyleSheet.create({
sideMenuProfileIcon: {
resizeMode: 'center',
width: 100,
height: 100,
borderRadius: 100 / 2,
alignSelf: 'center',
},
iconStyle: {
width: 15,
height: 15,
marginHorizontal: 5,
},
customItem: {
padding: 16,
flexDirection: 'row',
alignItems: 'center',
},
});
