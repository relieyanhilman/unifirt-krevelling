import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello ges</Text>
      <Image 
      source={require("./assets/logo-krevelling.png")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  }
});
