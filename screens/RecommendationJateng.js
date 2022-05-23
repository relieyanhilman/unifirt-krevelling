import { View, Text, ImageBackground, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import RecommendedPlaces from "../components/home/RecommendedPlaces";
// import RecommendationInBali from "../components/recommendation/RecommendationInBali";
import RecommendationInJateng from "../components/recommendation/RecommendationInJateng"

export default function RecommendationJateng({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/images/particleBackground.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <RecommendationInJateng />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
