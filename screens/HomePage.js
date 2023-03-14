import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../components/Button";
import Card from "../components/Card";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
//Card yapısı gelecek ve sonra data.json dosyasından filtering işlemi yapılacak
//Şuan yaptığın layout

const HomePage = () => {
  return (
    <HomeLayout>
      <Card />
    </HomeLayout>
  );
};



export default HomePage;
