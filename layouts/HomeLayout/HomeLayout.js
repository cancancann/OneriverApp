import React from "react";
import { Image, StyleSheet,TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const HomeLayout = ({ children }) => {
  const navigation = useNavigation();

  const handleWallet = () => {
    navigation.navigate("Wallet");
  };
  const handleGoBackHome = () => {
    navigation.navigate("Home");
  };

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

      {/* layout */}
      <View>{children}</View>

      {/* //Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleGoBackHome}>
          <Image source={require("../../assets/home.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWallet}>
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
