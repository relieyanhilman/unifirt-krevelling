import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require("../assets/images/particleBackground.png")}
          style={styles.background}
        >
          <Image
            source={require("../assets/images/LogoSignUp.png")}
            style={styles.logo}
          />
          <View style={styles.inputView}>
            <TextInput
              style={[styles.TextInput, styles.fontCard]}
              placeholder="Full Name"
              placeholderTextColor="#b9b9b9"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email or Username"
              placeholderTextColor="#b9b9b9"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#b9b9b9"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Re-type Password"
              placeholderTextColor="#b9b9b9"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={[styles.loginText, styles.fontLogin]}>SIGNUP</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    borderRadius: 10,
    height: 49,
    width: "70%",
    marginBottom: 20,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: 400,
    height: 800,
    alignItems: "center",
  },
  logo: {
    width: 193,
    height: 193,
    marginBottom: 20,
    marginTop: 0,
  },
  loginBtn: {
    width: "50%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#9DDAF4",
  },
  fontCard: {
    fontFamily: "Roboto",
  },

  fontLogin: {
    fontFamily: "Roboto",
    color: "white",
    fontWeight: "bold",
  },
});
