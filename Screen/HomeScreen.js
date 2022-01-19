import React from 'react'
import { Button,StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft:() => (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item 
          title="Menu" 
          iconName="menu" 
          onPress={() => alert('เมนู')} 
          />
        </HeaderButtons>
        ),
      headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item 
          title="register" 
          iconName="person-add" 
          onPress={() => alert('ลงทะเบียน')} 
          />
        </HeaderButtons>),
    });
  }, [navigation]);


    return (
        <View style={styles.container}>
           {  <Ionicons name='home'size={30}color='skyblue'/> }
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