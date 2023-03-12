import { useState } from "react";
import { Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import Card from "./Card";

//LAyout implement edilecek***
//Navigation İmplement edilecek***
//Filtering işlemi düzeltilecek***
//WalletScreen oluşturulacak**

export default function App() {
  return(
  <SafeAreaView style={styles.container}>
    {/* <LoginPage/> */}
    <HomePage />
    {/* <Card></Card> */}
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
