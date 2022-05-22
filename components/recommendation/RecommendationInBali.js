import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LocationOptions } from '../home/RecommendedPlaces'

const RecommendationInBali = () => {
  return (
    <View style={{ marginTop: 15, marginHorizontal: 10 }}>
        <Image source={require("../../assets/images/backButton.png")} style={styles.backButton}/>
        <Text style={styles.HeaderFont}>Recommended in Bali!</Text>
        <LocationOptions
        image={require("../../assets/images/danauBeratan.jpg")}
        location={"Danau Beratan, Bali"}
        price={15000}
        rating={4.9}
        reviews={1433}
      />
      <LocationOptions
        image={require("../../assets/images/pantaiKuta.jpg")}
        location={"Pantai Kuta, Bali"}
        price={5000}
        rating={4.9}
        reviews={1433}
      />
      <LocationOptions
        image={require("../../assets/images/tamanGaruda.jpg")}
        location={"Taman Garuda, Bali"}
        price={85000}
        rating={4.9}
        reviews={1433}
      />
      <LocationOptions
        image={require("../../assets/images/tamanAyun.jpg")}
        location={"Taman Ayun, Bali"}
        price={15000}
        rating={4.9}
        reviews={1433}
      />
    </View>
  )
}

export default RecommendationInBali

const styles = StyleSheet.create({
    HeaderFont: {
        fontSize: 24,
        fontWeight: '700',
        color: '#33C0F4',
        top: -42,
        left: 50,
        marginBottom: -20,
}
}
)
