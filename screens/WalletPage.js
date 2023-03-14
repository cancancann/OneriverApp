import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Card from "../components/Card";
import Filtering from "../components/Filtering";
import HeaderText from "../components/HeaderText";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";

const Wallet = () => {
  return (
    <HomeLayout>
      <HeaderText title="Wallet" />
      <Filtering />
    </HomeLayout>
  );
};

export default Wallet;
