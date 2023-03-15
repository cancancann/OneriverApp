import React from "react";
import Filtering from "../components/Filtering";
import HeaderText from "../components/HeaderText";
import WalletCard from "../components/WalletCard";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";

const Wallet = () => {
  
  return (
    <HomeLayout>
      <HeaderText title="Wallet" />
      <Filtering />
      <WalletCard />
    </HomeLayout>
  );
};

export default Wallet;
