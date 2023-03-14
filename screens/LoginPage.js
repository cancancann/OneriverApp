import { useState } from "react";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleLogin() {
      if (email === "hikmetcan" && password === "11223344") {
        //navigate işi
        console.log(email, password);
      } else {
        console.log(email, password);
      }
    }
  
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/oneriever.png")}
        ></Image>
        <Text style={styles.imageText}>Welcome to Oneriver</Text>
        <View style={styles.content}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <View style={styles.contentButton}>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image:{
      marginTop:142,
      width:150,
      height:150
    },
    imageText:{
      color:"#1A4184",
      marginTop:20,
      lineHeight:30,
      fontSize:20,
      fontWeight:400
    },
    content: {
      width: "100%",
      padding: 30,
      margin: 20,
    },
    contentButton: {
      width: "100%",
      alignItems: "center",
      marginTop: 10,
    },
    input: {
      backgroundColor: "#D9D9D9",
      padding: 20,
      borderRadius: 10,
    },
    button: {
      backgroundColor: "#1A4184",
      width: "50%",
      alignItems: "center",
      margin: 31,
      padding: 20,
      borderRadius: 10,
    },
    buttonText:{
      fontWeight:'600',
      fontSize:20,
      lineHeight:25,
      color:'#fff'
    },
    text: {
      padding: 10,
    },
  });

export default LoginPage