import { View, Text, ImageBackground, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../components/home/Profile";
import Discovery from "../components/home/Discovery";
import RecommendedPlaces from "../components/home/RecommendedPlaces";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/images/particleBackground.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Profile />
          <Discovery />
          <RecommendedPlaces />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
