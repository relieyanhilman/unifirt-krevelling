import {
  View,
  Text,
  DatePickerAndroidDateSetAction,
  Picker,
  StyleSheet,
} from "react-native";
import React from "react";

const [city, setCity] = useState("");

export default function CityandDuration() {
  return (
    <View>
      <Picker
        selectedValue={city}
        onValueChange={setCity}
        style={{ height: 50, width: 150 }}
      >
        <Picker.Item label="bali" value="Bali, Indonesia" />
        <Picker.Item label="jogja" value="Yogyakarta, Indonesia" />
      </Picker>
    </View>
  );
}
