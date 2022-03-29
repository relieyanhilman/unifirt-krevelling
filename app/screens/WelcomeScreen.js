import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native'

function WelcomeScreen(props) {
    return (
    
        // <Image style={styles.background_image} source={require('../assets/background-image.png')} />
        <View style={styles.background}>
        <Image 
        source={require('../assets/logo-krevelling.png')} />
        <Image source={require('../assets/Krevelling-title.png')} />
        <Image source={require('../assets/wording-splash-screen.png')} />

        </View>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }, background_image:{
        position: 'absolute'
    }, 
    
})

export default WelcomeScreen;