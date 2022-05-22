import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LocationOptions } from "../components/home/RecommendedPlaces";
export default function Recommendation() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/images/particleBackground.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={{ marginHorizontal: 10 }}>
          <LocationOptions
            image={require("../assets/images/monas.jpg")}
            location={"Gambir, Central Jakarta"}
            price={150000}
            rating={4.8}
            reviews={2873}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
