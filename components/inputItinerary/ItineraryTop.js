import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Itinerary2 from "../../screens/Itinerary2";

export default function ItineraryTop({
  navigation,
  numberItinerary,
  email,
  ...props
}) {
  const [day, setDay] = useState(0);
  const [location, setLocation] = useState("");
  const userEmail = email;
  const [itinerary, setItinerary] = useState([
    { key: 1, email: "test@gmail.com", day: 1, location: "Pantai Pandawa" },
    {
      key: 2,
      email: "test@gmail.com",
      day: 1,
      location: "Pantai Padang padang",
    },
    { key: 3, email: "test@gmail.com", day: 2, location: "Danau Beratan" },
    { key: 4, email: "test@gmail.com", day: 2, location: "Pantai Pandawa" },
  ]);
  const onPressAdd = (day, location) => {
    setDay(day);
    setLocation(location);
    // ngepush ke API
  };
  useEffect(() => {
    console.log("day", day);
    console.log("location", location);
    console.log("email", userEmail);
  }, [day, location]);

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  const postItineraryData = async (userEmail, day, location) => {
    // const dayInteger = parseInt(day);
    // const stringUserEmail = JSON.stringify(userEmail);
    // console.log("type day", typeof dayInteger);
    // const url = encodeURI(
    //   `https://c392-202-138-239-121.ap.ngrok.io/postItinerary/${dayInteger}/${userEmail}/${location}`
    // );
    // console.log(url);
    const postItineraryData = fetch(
      "https://c392-202-138-239-121.ap.ngrok.io/postItinerary",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            day_n: day,
            email_user: userEmail,
            places: location,
          },
          getCircularReplacer()
        ),
      }
    );
    return await postItineraryData.json;
  };

  const handlePostItineraryData = (e) => {
    e.preventDefault();
    postItineraryData();
  };

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
        Your Bali Trip Itinerary
      </Text>
      <Text style={{ fontWeight: "700", color: "black", marginBottom: 10 }}>
        Main Places
      </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.inputView}>
          <Text>Days</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={[styles.TextInput]}
            placeholder=""
            placeholderTextColor="#b9b9b9"
            keyboardType="numeric"
            onChangeText={(day) => setDay(day)}
          />
        </View>
      </View>
      <View style={styles.inputDiscovery}>
        <TextInput
          style={styles.TextInput}
          placeholder="Pantai Pandawa"
          placeholderTextColor="#b9b9b9"
          keyboardType="default"
          onChangeText={(location) => setLocation(location)}
        />
        {/* <Text>TextInput</Text> */}
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(numberItinerary, { email: userEmail })
        }
        style={{ flexDirection: "row-reverse" }}
      >
        <View style={[styles.inputView, { justifyContent: "center" }]}>
          <Text>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: 49,
    width: "20%",
    marginBottom: 20,
    marginRight: 10,
    justifyContent: "center",
    backgroundColor: "#EFF5FE",
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    padding: 10,
  },
  inputDiscovery: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: 49,
    width: "100%",
    marginBottom: 20,
    marginRight: 10,
    justifyContent: "center",
    backgroundColor: "#EFF5FE",
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
  },
});
