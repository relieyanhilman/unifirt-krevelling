import { View, Text } from "react-native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ItineraryLocDate from "./screens/ItineraryLocDate";
import AddItinerary from "./screens/AddItinerary";
export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ItineraryLocDate"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="ItineraryLocDate" component={ItineraryLocDate} />
        <Stack.Screen name="AddItinerary" component={AddItinerary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
