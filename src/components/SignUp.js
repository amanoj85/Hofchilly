import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground } from 'react-native'
import React from 'react'

const SignUp = () => {
  return(
      <>
      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Full name"
        placeholderTextColor="#003f5c"
        onChangeText={(name) => setName(name)}
      />
    </View>

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
        placeholder="Create Password"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(createPassword) => setCreatePassword(createPassword)}
      />
    </View>
 
 <View>
   <Text style={styles.passwordHintText}>Password must be at least 8 charactes long including uppercase, lowercase, number and special character. Example: Ab12@9Jx</Text>
   </View>

    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.signupText}>SIGNUP</Text>
    </TouchableOpacity>

    </>
  )
}

export default SignUp;

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
 
  passwordHintText:{
    marginTop:-15,
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

  signupText:{
    color:'#fff',
  },

})
