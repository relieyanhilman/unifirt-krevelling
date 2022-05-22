import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LocationDatePicker } from "../components/itinerary/LocationDateRangePicker";

export default function ItineraryLocDate({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderFont}>Plan a New trip!</Text>
      <LocationDatePicker navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  HeaderFont: {
    marginTop: 60,
    alignItems: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#33C0F4",
  },
});
