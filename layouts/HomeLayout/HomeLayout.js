import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";

const HomeLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("../../assets/menu.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("../../assets/search.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      {/* //headerText */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.oneriver}>Oneriver</Text> Trade
        </Text>
      </View>
      {/* //Filtering */}
      <View style={styles.filter}>
        <Button title="All" />
        <Button title="Crypto" />
        <Button title="Currency" />
      </View>
      <View>{children}</View>
      {/* //Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require("../../assets/home.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/wallet.png")}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    backgroundColor: "#fff",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    margin: 27,
    padding: 10,
  },
  header: {
    marginLeft: 27,
    marginTop: 16,
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
  filter: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#1A4184",
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default HomeLayout;
