import { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleLogin(email,password){

    if(email === "hikmetcan" && password ==="11223344"){
      console.log("Giriş bilgileri doğru")
    }else{
      console.log("Hatalı giriş")
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>E Posta</Text>
        <TextInput
          style={styles.input}
          placeholder="E-Posta"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.text}>Şifre</Text>
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <View style={styles.contentButton}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkorange",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "gray",
    width: "100%",
    padding: 30,
    margin: 20,
  },
  contentButton:{
    width: "100%",
    alignItems:"center",
    marginTop:10
  },
  input: {
    backgroundColor: "#f3f3f3",
    padding: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  text: {
    padding: 20,
  },
});
