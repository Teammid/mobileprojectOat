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

const SetingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style= {{fontSize: 30,  margin: 10}}> Setting Screen </Text>
      <Button
        title="Go to Home Tab"
        onPress={() => navigation.navigate('HomeScreen')}></Button>
      <Button
        title="Open News Screen"
        //onPress={() => navigation.navigate('')}
      />
      <Button
        title="Open Profile Screen"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
    </View>
  );
};

export default SetingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
