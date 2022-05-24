import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ItineraryTop from "../components/inputItinerary/ItineraryTop";
import ItineraryBottom from "../components/inputItinerary/ItineraryBottom";
export default function Itinerary2({ route, navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/images/particleBackground.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <Image
          source={require("../assets/images/backButton.png")}
          // style={styles.backButton}
        />
        <Text style={styles.HeaderFont}>Itinerary</Text>
        <ScrollView style={{ marginHorizontal: 10 }}>
          <ItineraryTop
            // email={route.params.email}
            navigation={navigation}
            numberItinerary={"Itinerary3"}
            email={route.params.email}
          />
          <ItineraryBottom
            text1={"Pantai Kuta"}
            text2={""}
            text3={""}
            text4={""}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HeaderFont: {
    fontSize: 24,
    fontWeight: "700",
    color: "#33C0F4",
    top: -42,
    left: 50,
    marginBottom: -20,
  },
});
