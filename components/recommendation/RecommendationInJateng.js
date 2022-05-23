import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LocationOptions } from "../home/RecommendedPlaces";

const RecommendationInJateng = () => {
  return (
    <View style={{ marginTop: 15, marginHorizontal: 10 }}>
      <Image
        source={require("../../assets/images/backButton.png")}
        style={styles.backButton}
      />
      <Text style={styles.HeaderFont}>Recommended in Jawa Tengah!</Text>
      <LocationOptions
        image={require("../../assets/images/Borobudur-1.jpg")}
        location={"Candi Borobudur"}
        price={15000}
        rating={4.9}
        reviews={1433}
      />
      <LocationOptions
        image={require("../../assets/images/dieng.png")}
        location={"Dataran Tinggi Dieng"}
        price={10000}
        rating={4.9}
        reviews={1433}
      />
      <LocationOptions
        image={require("../../assets/images/gunungMerbabu.jpg")}
        location={"Gunung Merbabu"}
        price={30000}
        rating={4.9}
        reviews={1433}
      />
      <LocationOptions
        image={require("../../assets/images/baturaden.jpg")}
        location={"Baturaden"}
        price={25000}
        rating={4.9}
        reviews={1433}
      />
    </View>
  );
};

export default RecommendationInJateng;

const styles = StyleSheet.create({
  HeaderFont: {
    fontSize: 21,
    fontWeight: "700",
    color: "#33C0F4",
    top: -42,
    left: 50,
    marginBottom: -20,
  },
});
