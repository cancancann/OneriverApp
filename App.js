import { SafeAreaView } from "react-native";
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import WalletPage from "./screens/WalletPage";
import HomeLayout from "./layouts/HomeLayout/HomeLayout.js";
import Card from "./components/Card";

//Filtering işlemi düzeltilecek***
//WalletScreen oluşturulacak**

export default function App() {
  const Stack = createStackNavigator();
  return(
  <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
        <Stack.Screen name="Wallet" component={WalletPage}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
    
    
    
    
    {/* <LoginPage/> */}
    {/* <HomePage /> */}
    {/* <Wallet /> */}
    {/* <HomeLayout>
      <Card />
    </HomeLayout> */}
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
