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



export default function PlacePicker(){
    const [location, setLocation] = useState("Where to go?");
    const [isModalVisible, setModalVisible] = useState(false);
    const changeModalVisibility = (boolean) => {
      setModalVisible(boolean);
    };
    const setData = (data) => {
      setLocation(data);
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
        </View>)
};

const OPTIONS = ["Taman Ayun", "Pantai Pandawa", "Pantai Kuta", "Danau Beratan"];
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
      <View style={[styles.modal, { width: WIDTH - 50, height: HEIGHT / 4}]}>
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
      textAlign: "left",
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
      marginVertical: 20,
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
  