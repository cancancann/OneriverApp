import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WalletCard = ({item}) => {
  return (
    <View style={styles.containerCard}>
      <Image source={{uri : item.image }} style={styles.image} />
      {/* textHeader */}
      <View style={styles.textHeader}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.contentText}>{item.amount}</Text>
        <Text style={styles.contentTextPrice}>$ {item.current_price.toFixed(2) * item.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 10,
    height: 81,
    paddingHorizontal: 10,
    backgroundColor: "#E7E7E7",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textHeader: {
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    fontWeight: "600",
  },
  content: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 15,
  },
  contentText: {
    marginBottom: 3,
    color: "#000000",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 27,
  },
  contentTextPrice: {
    color: "#1E1E1EB2",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default WalletCard;
