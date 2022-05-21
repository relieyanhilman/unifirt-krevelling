import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect} from 'react';
// import {Base, backButton, danauBeratan, rating, review} from '../../assets'
import { StatusBar } from 'expo-status-bar';
// import { LinearGradient } from 'react-native-svg';
// import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Recommendation = () => {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground source={require("../assets/images/particleBackground.png")} style={styles.background}>
            <ScrollView>
            <Image source={require("../assets/images/backButton.png")} style={styles.backButton}/>
            <Text style={styles.HeaderFont}>Recommended in Bali!</Text>
            
            <View>
                <Image source={require("../assets/images/danauBeratan.jpg")} style={styles.card}/>
                <View style={styles.paddingText}></View>
                    <Text style={styles.textCard}>Danau Beratan</Text>
                    <Text style={styles.priceText}>- IDR 15.000/Person</Text>
                    <Image source={require("../assets/images/rating.png")} style={styles.rating}/>
                    <Text style={styles.ratingText}>4.5</Text>
                    <Image source={require("../assets/images/review.png")} style={styles.review}/>
                    <Text style={styles.reviewText}>1.5k reviews</Text>
            </View>
            <View>
                <Image source={require("../assets/images/danauBeratan.jpg")} style={styles.card}/>
                <View style={styles.paddingText}></View>
                    <Text style={styles.textCard}>Danau Beratan</Text>
                    <Text style={styles.priceText}>- IDR 15.000/Person</Text>
                    <Image source={require("../assets/images/rating.png")} style={styles.rating}/>
                    <Text style={styles.ratingText}>4.5</Text>
                    <Image source={require("../assets/images/review.png")} style={styles.review}/>
                    <Text style={styles.reviewText}>1.5k reviews</Text>
            </View>
            <View>
                <Image source={require("../assets/images/danauBeratan.jpg")} style={styles.card}/>
                <View style={styles.paddingText}></View>
                    <Text style={styles.textCard}>Danau Beratan</Text>
                    <Text style={styles.priceText}>- IDR 15.000/Person</Text>
                    <Image source={require("../assets/images/rating.png")} style={styles.rating}/>
                    <Text style={styles.ratingText}>4.5</Text>
                    <Image source={require("../assets/images/review.png")} style={styles.review}/>
                    <Text style={styles.reviewText}>1.5k reviews</Text>
            </View>
            <View>
                <Image source={require("../assets/images/danauBeratan.jpg")} style={styles.card}/>
                <View style={styles.paddingText}></View>
                    <Text style={styles.textCard}>Danau Beratan</Text>
                    <Text style={styles.priceText}>- IDR 15.000/Person</Text>
                    <Image source={require("../assets/images/rating.png")} style={styles.rating}/>
                    <Text style={styles.ratingText}>4.5</Text>
                    <Image source={require("../assets/images/review.png")} style={styles.review}/>
                    <Text style={styles.reviewText}>1.5k reviews</Text>
            </View>

            <View>
                <Image source={require("../assets/images/danauBeratan.jpg")} style={styles.card}/>
                <View style={styles.paddingText}></View>
                    <Text style={styles.textCard}>Danau Beratan</Text>
                    <Text style={styles.priceText}>- IDR 15.000/Person</Text>
                    <Image source={require("../assets/images/rating.png")} style={styles.rating}/>
                    <Text style={styles.ratingText}>4.5</Text>
                    <Image source={require("../assets/images/review.png")} style={styles.review}/>
                    <Text style={styles.reviewText}>1.5k reviews</Text>
            </View>
            </ScrollView>
        </ImageBackground>
    </View>
  )
}

export default Recommendation

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: 400,
        height: 800,
},
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',    
  },
  HeaderFont: {
      position: 'absolute',
      fontSize: 24,
      fontWeight: '700',
      color: '#33C0F4',
      left: 51,
      top: 56   
  },
  backButton: {
      top: 55,
      left: 10,
      position: 'absolute',
},
    card: {
        borderRadius: 24,
        height: 158,
        width: 340,
        top : 103,
        left: 30,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 16,
        marginBottom: -90,
},
    paddingText: {
        padding: 15,
        backgroundColor: 'black',
        top: 164,
        width: 340,
        left: 30,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        opacity: 0.5,
        
    },
    textCard:{
        color: 'white',
        top: 135,
        width: 321,
        left: 55,
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 21,
    },
    priceText:{
        color: 'white',
        fontWeight: '500',
        fontSize: 10,
        left: 165,
        top: 120,
    },
    rating:{
        top: 105,
        left: 290,
    },
    review:{
        top: 97,
        left: 290,
    },
    ratingText:{
        top: 95,
        left: 300,
        fontSize: 8,
        color: 'white',
        textDecorationLine: 'underline',
    },
    reviewText:{
        textDecorationLine: 'underline',
        top: 85,
        left: 300,
        fontSize: 8,
        color: 'white',
    }

}
)