import React from 'react'
import { Button,StyleSheet, Text, View } from 'react-native'
/* import Ionicons from 'react-native-vector-icons/Ionicons'; */

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
           {/*  <Ionicons name='home'size={30}color='skyblue'/> */}
            <Text>หน้าหลัก</Text>
            <Button n
                title='GO to About'
                onPress={()=>navigation.navigate('About',{
                    email:'natthakorn@hamil.com'
                }
                )}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})