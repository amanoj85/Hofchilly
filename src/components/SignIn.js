import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground } from 'react-native'
import React from 'react'

const SignIn = () => {
  return(
      <>
      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>

    <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>

    </>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#fda759",
    borderRadius: 20,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems:'center',
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    justifyContent:'center',
    textAlign:'center',
  },
 
  forgot_button: {
    height: 30,
    marginTop:-15,
    marginLeft:220,
    marginBottom: 10,
  },
 
  loginBtn: {
    width: "50%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff1c0e",
    marginBottom:30,
    marginTop:30,
  },

  loginText:{
    color:'#fff',
  },
})