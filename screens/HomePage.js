import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../components/Button";
import Card from "../components/Card";
import Filtering from "../components/Filtering";
import HeaderText from "../components/HeaderText";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
//Card yapısı gelecek ve sonra data.json dosyasından filtering işlemi yapılacak
//Şuan yaptığın layout

const HomePage = () => {
  return (
    <HomeLayout>
      <HeaderText title="Oneriever" />
      <Filtering />
      <Card />
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
})

export default HomePage;
