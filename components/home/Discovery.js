import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function Discovery({ navigation }) {
  return (
    <View style={{ marginTop: 15, marginHorizontal: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Discovery
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <DiscoveryOption
          text={"itinerary"}
          backgroundImage={require("../../assets/images/monas.jpg")}
          icon={require("../../assets/icons/travel-luggage-1.png")}
          navigation={navigation}
          navigationDestination={"ItineraryLocDate"}
          isNavigation={true}
        />
        <DiscoveryOption
          text={"Recommended Places"}
          backgroundImage={require("../../assets/images/hammock.jpg")}
          icon={require("../../assets/icons/earth1.png")}
          isNavigation={false}
        />
        <DiscoveryOption
          text={"Maps"}
          backgroundImage={require("../../assets/images/danau-kalimutu.jpg")}
          icon={require("../../assets/icons/mapsIcons.png")}
          isNavigation={false}
        />
        <DiscoveryOption
          text={"Cost Prediction"}
          backgroundImage={require("../../assets/images/Borobudur-1.jpg")}
          icon={require("../../assets/icons/money-bag-1.png")}
          isNavigation={false}
        />
        <DiscoveryOption
          text={"Tour Guide"}
          backgroundImage={require("../../assets/images/pantai-kanawa.jpg")}
          icon={require("../../assets/icons/tour-guide-1.png")}
          isNavigation={false}
        />
      </View>
    </View>
  );
}

function DiscoveryOption({ navigation, ...props }) {
  const isNavigation = props.isNavigation;
  const navigationDestination = props.navigationDestination;
  if (isNavigation) {
    return (
      <View style={{ width: "50%", marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationDestination)}
          style={{ borderRadius: 15 }}
        >
          <Image
            source={props.backgroundImage}
            blurRadius={15}
            style={{ width: "95%", height: 80, opacity: 0.7, borderRadius: 15 }}
          />
          <View
            style={{
              display: "flex",
              position: "absolute",
              flexDirection: "row",
              alignItems: "center",
              top: 7,
            }}
          >
            <Image source={props.icon} />
            <Text
              style={{
                flex: 1,
                flexWrap: "wrap",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
                marginHorizontal: -4,
              }}
            >
              {props.text}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={{ width: "50%", marginBottom: 10 }}>
        <TouchableOpacity style={{ borderRadius: 15 }}>
          <Image
            source={props.backgroundImage}
            blurRadius={15}
            style={{ width: "95%", height: 80, opacity: 0.7, borderRadius: 15 }}
          />
          <View
            style={{
              display: "flex",
              position: "absolute",
              flexDirection: "row",
              alignItems: "center",
              top: 7,
            }}
          >
            <Image source={props.icon} />
            <Text
              style={{
                flex: 1,
                flexWrap: "wrap",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
                marginHorizontal: -4,
              }}
            >
              {props.text}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
