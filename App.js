import { Image, SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import Card from "./components/Card";
import Wallet from "./screens/WalletPage";
import HomeLayout from "./layouts/HomeLayout/HomeLayout.js";

//LAyout implement edilecek***
//Navigation İmplement edilecek***
//Filtering işlemi düzeltilecek***
//WalletScreen oluşturulacak**

export default function App() {
  return(
  <SafeAreaView style={styles.container}>
    {/* <LoginPage/> */}
    {/* <HomePage /> */}
    {/* <Wallet /> */}
    <HomeLayout>
      <Card />
    </HomeLayout>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
