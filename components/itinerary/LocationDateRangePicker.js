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
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function useInput() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  return {
    date,
    showDatepicker,
    show,
    mode,
    onChange,
  };
}

export const LocationDatePicker = ({ navigation }) => {
  const startInput = useInput(new Date());
  const endInput = useInput(new Date());
  const [location, setLocation] = useState("Where to go?");
  const [isModalVisible, setModalVisible] = useState(false);
  const changeModalVisibility = (boolean) => {
    setModalVisible(boolean);
  };
  const setData = (data) => {
    setLocation(data);
  };

  const onPressNext = (location, startDate, endDate) => {
    navigation.navigate("AddItinerary", {
      location: location,
      startDate: startDate,
      endDate: endDate,
    });
  };
  return (
    <View style={styles.container}>
      {/* Location Picker */}
      <TouchableOpacity
        style={[styles.touchableOpacity, styles.elevation]}
        onPress={() => changeModalVisibility(true)}
      >
        <Text style={styles.text}>{location}</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
      {/* Date Range Button */}
      <Text style={styles.headingText}>How long?</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "flex-start",
          marginTop: 20,
        }}
      >
        <Text style={[styles.text, { textAlign: "center" }]}>From: </Text>
        <Button
          onPress={startInput.showDatepicker}
          title={startInput.date.toLocaleDateString()}
          style={styles.button}
        />
        {startInput.show && (
          <DateTimePicker
            testID="dateTimePicker1"
            value={startInput.date}
            mode={startInput.mode}
            is24Hour={true}
            display="default"
            onChange={startInput.onChange}
          />
        )}
        <Text style={[styles.text, { textAlign: "center" }]}>To:</Text>
        <Button
          onPress={endInput.showDatepicker}
          title={endInput.date.toLocaleDateString()}
          style={[styles.button]}
        />
        {endInput.show && (
          <DateTimePicker
            testID="dateTimePicker2"
            value={endInput.date}
            mode={endInput.mode}
            is24Hour={true}
            display="default"
            onChange={endInput.onChange}
          />
        )}
      </View>
      {/* next button */}
      <Button
        title="Next"
        style={styles.button}
        // onClick={() => onPressNext(location, startInput.date, endInput.date)
        onPress={() => navigation.navigate("AddItinerary")}
      />
    </View>
  );
};
const OPTIONS = ["Bali, Indonesia", "Jogja, Indonesia"];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ModalPicker = (props) => {
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
  };
  const option = OPTIONS.map((option, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(option)}
      >
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.containerModal}
    >
      <View style={[styles.modal, { width: WIDTH - 50, height: HEIGHT / 6 }]}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  text: {
    marginVertical: 15,
    fontSize: 14,
    // textAlign: "left",
    color: "#B9B9B9",
    fontWeight: "bold",
  },
  headingText: {
    marginVertical: 10,
    fontSize: 20,
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
  },
  touchableOpacity: {
    backgroundColor: "white",
    width: 307,
    height: 49,
    alignSelf: "stretch",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  elevation: {
    elevation: 5,
    shadowColor: "#000",
  },
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
  },
  option: {
    alignItems: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
  },
  optionText: {
    marginVertical: 18,
    marginHorizontal: 10,
    fontSize: 18,
    color: "#595959",
    fontWeight: "bold",
  },
  button: {
    margin: 10,
  },
});
