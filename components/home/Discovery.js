import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function Discovery() {
  return (
    <View style={{ marginTop: 15, marginHorizontal: 10 }}>
      <Text>Discovery</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <DiscoveryOption />
        <DiscoveryOption />
      </View>
    </View>
  );
}

const DiscoveryOption = () => (
  <View style={{ flex: 1 }}>
    <TouchableOpacity>
      <Image
        source={require("../../assets/images/monas.jpg")}
        style={{ width: "80%", height: 80 }}
      />
    </TouchableOpacity>
  </View>
);
