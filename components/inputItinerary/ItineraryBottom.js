import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ItineraryBottom(props) {
  return (
    <View>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 18,
          fontWeight: "700",
          color: "#33C0F4",
        }}
      >
        Itinerary
      </Text>

      <View style={styles.container}>
        <View style={styles.paddingItinerary}>
          <Text style={{ right: 20, fontWeight: "bold", fontSize: 24 }}>
            Day 1
          </Text>
          <View style={{ display: "flex", flexDirection: "column" }}>
            {/* <Text style={{ fontWeight: "600" }}>Pantai Kuta</Text> */}
            <Text>{props.text1}</Text>
            <Text>{props.text2}</Text>
          </View>
        </View>

        <View style={styles.paddingItinerary}>
          <Text style={{ right: 20, fontWeight: "bold", fontSize: 24 }}>
            Day 2
          </Text>
          <View style={{ display: "flex", flexDirection: "column" }}>
            {/* <Text style={{ fontWeight: "600" }}>Pantai Kuta</Text> */}
            <Text>{props.text3}</Text>
            <Text>{props.text4}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paddingItinerary: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "rgba(51, 192, 244, 0.4)",
    borderRadius: 8,
    width: 345,
    height: 86,
    marginTop: 20,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
