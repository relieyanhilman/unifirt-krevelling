import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Picker,
  Modal,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function AddItinerary({ route, navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../assets/images/particleBackground.png")}
        style={styles.background}
      >
        <ScrollView>
          <Image
            source={require("../assets/images/backButton.png")}
            style={styles.backButton}
          />
          <Text style={styles.HeaderFont}>Itinerary</Text>

          <View>
            {/* <Text>{navigation.getParam("location")}</Text> */}
            <Text>testing</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: 400,
    height: 800,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  HeaderFont: {
    position: "absolute",
    fontSize: 24,
    fontWeight: "700",
    color: "#33C0F4",
    left: 51,
    top: 56,
  },
  backButton: {
    top: 55,
    left: 10,
    position: "absolute",
  },
  card: {
    borderRadius: 24,
    height: 158,
    width: 340,
    top: 103,
    left: 30,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 16,
    marginBottom: -90,
  },
  paddingText: {
    padding: 15,
    backgroundColor: "black",
    top: 164,
    width: 340,
    left: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    opacity: 0.5,
  },
  textCard: {
    color: "white",
    top: 135,
    width: 321,
    left: 55,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 21,
  },
  priceText: {
    color: "white",
    fontWeight: "500",
    fontSize: 10,
    left: 165,
    top: 120,
  },
  rating: {
    top: 105,
    left: 290,
  },
  review: {
    top: 97,
    left: 290,
  },
  ratingText: {
    top: 95,
    left: 300,
    fontSize: 8,
    color: "white",
    textDecorationLine: "underline",
  },
  reviewText: {
    textDecorationLine: "underline",
    top: 85,
    left: 300,
    fontSize: 8,
    color: "white",
  },
});
