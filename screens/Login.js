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
import React, { useEffect, useState } from "react";
// import { LoginImage } from '../../assets'
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { authentication } from "../firebase/firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Login = ({ navigation }) => {
  // TEST FIREBASE

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSignedIn, setIsSignedIn] = useState(false);

  const redirectToHomePage = () => {
    navigation.navigate("Home");
  };
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with email: ", user.email);
      })
      .catch((error) => allert(error.message));
  };

  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log("login success");
        setIsSignedIn(true);
        redirectToHomePage();
      })
      .catch((re) => {
        console.log("login failed");
        console.log(re);
      });
  };

  const signOutUser = () => {
    signOut(authentication)
      .then((re) => {
        console.log("logout success");
        setIsSignedIn(false);
      })
      .catch((err) => {
        console.log("login failed");
        console.log(err);
      });
  };

  // TEST FIREBASE

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require("../assets/images/particleBackground.png")}
          style={styles.background}
        >
          <Image
            source={require("../assets/images/LoginImage.png")}
            style={styles.logo}
          />
          <View>
            <Text style={styles.HeaderFont}>Welcome Back, Kreveller!</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#b9b9b9"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#b9b9b9"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          {/* <View> */}
          {isSignedIn === true ? (
            <TouchableOpacity style={styles.loginBtn} onPress={signOutUser}>
              <Text style={[styles.loginText, styles.fontLogin]}>LOGOUT</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.loginBtn} onPress={signInUser}>
              <Text style={[styles.loginText, styles.fontLogin]}>LOGIN</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={[styles.loginText, styles.fontLogin]}>REGISTER</Text>
          </TouchableOpacity>

          {/* </View> */}
        </ImageBackground>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default Login;

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
    backgroundColor: "#33C0F4",
    marginBottom: -20,
    marginTop: 0,
  },
  registerBtn: {
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
  HeaderFont: {
    fontWeight: "bold",
    color: "#33C0F4",
    fontSize: 30,
    padding: 30,
    textAlign: "center",
  },
});
