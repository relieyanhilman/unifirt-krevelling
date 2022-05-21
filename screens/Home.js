import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../components/home/Profile";
import Discovery from "../components/home/Discovery";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground
        source={require("../assets/images/particleBackground.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <Profile />
        <Discovery />
      </ImageBackground>
    </SafeAreaView>
  );
}
