import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const Card = ({ item, onClick }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ color: "#666", marginTop: 5 }}>
          {item.symbol.toUpperCase()}
        </Text>
      </View>
      <View style={styles.content}>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onClick(item)}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  content: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 50,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  button: {
    backgroundColor: "#28DE0A33",
    width: 65,
    alignItems: "center",
    borderRadius: 10,
    height: 28,
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "600",
    color: "#1DBA04",
    fontSize: 16,
    lineHeight: 21,
  },
});

export default Card;
