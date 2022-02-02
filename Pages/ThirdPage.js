import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from '../components/styles';

const ThridPage = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={styles.container}>
                    <Text style={styles.texTopStyle}>
                        This is Third Page
                    </Text>
            <View>
                <Button
                    title = "Go to First Page"
                    onPress={()=>navigation.navigate('FirstPage')}
                />
                <Button
                    title = "Go to Second Page"
                    onPress={()=>navigation.navigate('SecondPage')}
                />
            </View>
            <View style={{bottom:10,position:'absolute'}}>
                <Text style = {styles.textBottomStyle}>Thai-Nichi Institute of Technologt</Text>
            </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ThridPage;
