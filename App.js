import { Dimensions, StyleSheet, Text, TouchableNativeFeedback, View, Alert, Image, SafeAreaView, Button, Platform, StatusBar } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
 return (
   <WelcomeScreen />
 );
};
