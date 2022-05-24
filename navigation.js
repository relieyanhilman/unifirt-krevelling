import { View, Text } from "react-native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ItineraryLocDate from "./screens/ItineraryLocDate";
import AddItinerary from "./screens/AddItinerary";
import Home from "./screens/Home";
import Recommendation from "./screens/Recommendation";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import RecommendationJateng from "./screens/RecommendationJateng";
import Itinerary from "./screens/Itinerary";
import Itinerary2 from "./screens/Itinerary2";
import Itinerary3 from "./screens/Itinerary3";
import Itinerary4 from "./screens/Itinerary4";
import Itinerary5 from "./screens/Itinerary5";
export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Recommendation" component={Recommendation} />
        <Stack.Screen name="Itinerary" component={Itinerary} />
        <Stack.Screen name="Itinerary2" component={Itinerary2} />
        <Stack.Screen name="Itinerary3" component={Itinerary3} />
        <Stack.Screen name="Itinerary4" component={Itinerary4} />
        <Stack.Screen name="Itinerary5" component={Itinerary5} />
        <Stack.Screen name="ItineraryLocDate" component={ItineraryLocDate} />
        <Stack.Screen name="AddItinerary" component={AddItinerary} />
        <Stack.Screen
          name="RecommendationJateng"
          component={RecommendationJateng}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
