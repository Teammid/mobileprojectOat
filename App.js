import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Screen/HomeScreen';
import SettingScreen from './Screen/SettingScreen';
import ProfileScreen from './Screen/ProfileScreen';

const Stack = createStackNavigator();

function HomeScreenPage() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {backgroundColor: '#f45'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function SettingsScreenPage() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#f45'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'}, 
      }}>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? (
                <Image
                  source={require('./asset/logo1.png')}
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                />
              ) : (
                <Image
                  source={require('./asset/logo2.png')}
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                />
              );
            } else if (route.name === 'SettingScreen') {
              iconName = focused ? (
                <Image
                  source={require('./asset/logo1.png')}
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                />
              ) : (
                <Image
                  source={require('./asset/logo3.png')}
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                />
              );
            }
            return iconName;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreenPage} />
        <Tab.Screen name="SettingScreen" component={SettingsScreenPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
