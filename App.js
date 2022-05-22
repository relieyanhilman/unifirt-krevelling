import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Alert,
  Image,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Recommendation from "./screens/Recommendation";

export default function App() {
  return <Recommendation />;
}
