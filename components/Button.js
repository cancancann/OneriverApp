import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({title}) => {
  return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft:11,
    marginTop:25,
    borderRadius:10,
    backgroundColor:"#EBF3FF",
    width:100,
    height:40,
    justifyContent:"center",
    alignItems:"center"

  },
  buttonText:{
    fontWeight:"600",
    fontSize:20,
    lineHeight:25,
    color:"#1A4184",
  }
});

export default Button;