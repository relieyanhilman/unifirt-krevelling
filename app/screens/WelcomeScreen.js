import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native'

function WelcomeScreen(props) {
    return (
        <View style={styles.background}>
        <Image 
        source={require('../assets/logo-krevelling.png')} />

        <Text>Krevelling</Text>
        <Text>Your 'kere' Travelling Partner</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
   
    
})

export default WelcomeScreen;