import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style= {{fontSize: 30,  margin: 10}}> HomeScreen </Text>
      <Button
        title="Go to Setting Tab"
        onPress={() => navigation.navigate('SettingScreen')}/>
      <Button
        title="Open News Screen"
        //onPress={() => navigation.navigate('About')} 
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
