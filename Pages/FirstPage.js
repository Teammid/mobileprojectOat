import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from '../components/styles';

const FirstPage = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={styles.container}>
                    <Text style={styles.texTopStyle}>
                        This is the First Page
                    </Text>
            <View>
                <Button
                    title = "Go to Second Page"
                    onPress={()=>navigation.navigate('SecondPage')}
                />
                <Button
                    title = "Go to Third Page"
                    onPress={()=>navigation.navigate('ThirdPage')}
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

export default FirstPage;
