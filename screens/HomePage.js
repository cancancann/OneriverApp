import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet} from "react-native";
import Card from "../components/Card";
import axios from "axios";
import Filtering from "../components/Filtering";
import HeaderText from "../components/HeaderText";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import { useDispatch } from "react-redux";
import { addPurchase } from "../redux/purchaseSlice";

//Card yapısı gelecek ve sonra data.json dosyasından filtering işlemi yapılacak
//Şuan yaptığın layout

const HomePage = () => {
  const [coins,setCoins] = useState();
  const dispatch=useDispatch()
  const handleClick=(item)=>{
    dispatch(addPurchase(item))
  }
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <HomeLayout>
      <HeaderText title="Oneriever" />
      <Filtering />
      <FlatList
        data={coins}
        renderItem={({item})=><Card item={item} onClick={handleClick}/>}
        keyExtractor={(item) => item.id}
      />
    </HomeLayout>
  );
};



export default HomePage;
