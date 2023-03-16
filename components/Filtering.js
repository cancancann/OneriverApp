import React from "react";
import { StyleSheet,View } from "react-native";
import Button from "./Button";

const Filtering = () => {
  return (
    <View style={styles.filter}>
      <Button title="All" />
      <Button title="Crypto" />
      <Button title="Currency" />
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default Filtering;
