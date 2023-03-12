import { useState } from "react";
import { Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

export default function App() {
  return(
  <SafeAreaView style={styles.container}>
    {/* <LoginPage/> */}
    <HomePage />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
