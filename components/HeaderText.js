import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderText = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        <Text style={styles.oneriver}>{title}</Text> Trade
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginTop: 5,
  },
  headerText: {
    fontWeight: 600,
    fontSize: 25,
    color: "#1E1E1E",
    lineHeight: 40,
  },
  oneriver: {
    color: "#1A4184",
  },
});

export default HeaderText;
