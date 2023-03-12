import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import axios from "axios";

//card yapısını düzenleme işlemi kaldı bi kaç fix düzeltilecek

export default function Card() {
  const [coins, setCoins] = useState([]);

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

  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginBottom: 10,
        borderBottomWidth: 15,
        borderBottomColor: "#eee",
        paddingHorizontal: 10,
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 50, height: 50, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ color: "#666", marginTop: 5 }}>
          {item.symbol.toUpperCase()}
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          ${item.current_price.toFixed(2)}
        </Text>
        <Text
          style={{
            color: item.price_change_percentage_24h > 0 ? "green" : "red",
          }}
        >
          {item.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={coins}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}
