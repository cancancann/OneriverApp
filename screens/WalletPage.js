import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import Filtering from "../components/Filtering";
import HeaderText from "../components/HeaderText";
import WalletCard from "../components/WalletCard";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";

const Wallet = () => {
  const purchases=useSelector((state)=>state.purchase.purchases)
  
  return (
    <HomeLayout>
      <HeaderText title="Wallet" />
      <Filtering />
      <FlatList data={purchases} renderItem={WalletCard }  />
      
    </HomeLayout>
  );
};

export default Wallet;
