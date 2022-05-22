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
import PlacePicker from "../components/itinerary/PlacePicker";

export default function AddItinerary({ route, navigation }) {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <ImageBackground
    //     source={require("../assets/images/particleBackground.png")}
    //     style={styles.background}
    //   >
    //     <Text style={styles.HeaderFont}>Itinerary</Text>
    //     <View style={{display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "space-between",
    //       flexWrap: "wrap",
    //       alignItems: "center",}}>
    //       <View style={{ marginTop: 80, marginVertical: 10, alignItems: "center" }}>
    //         <PlacePicker />
    //       </View>
    //       <View style={{ marginVertical: 10, alignItems: "center" }}>
    //         <PlacePicker />
    //       </View>
    //     </View>
    //     <Text style={styles.text}>Day 1 Itinerary Bali's Trip</Text>
    //   </ImageBackground>
    // </View>
    <View style={styles.container}>
      <Text style={styles.HeaderFont}>Itinerary</Text>
      <Text style={styles.subHeaderFont}>Day 1 Bali's Itinerary</Text>
      <Text style={styles.text2}>Main Places</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          marginVertical: 20,
          marginTop: -350,
        }}
      >
        <View>
          <PlacePicker />
        </View>
        <View>
          <PlacePicker />
        </View>
      </View>
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
  text: {
    marginVertical: 15,
    alignItems: "center",
  },
  text2: {
    fontSize: 20,
    fontWeight: "700",
  },
  subHeaderFont: {
    fontSize: 18,
    fontWeight: "700",
    color: "#33C0F4",
  },
});
