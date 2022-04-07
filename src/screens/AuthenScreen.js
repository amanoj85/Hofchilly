import {Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground } from 'react-native'
import React , {useState} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const AuthenScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [signIn, setSignIn]=useState("");
  const [signUp, setSignUp]=useState("");

 const signInClick = () => {
    setSignIn(true);
    }

    const signUpClick = () => {
        setSignIn(false);
        }
    
  return (
    <View style={styles.container}>
 
     <Image style={styles.image} source={require('../../assets/img/foodlogo.png')} />      

          <View style={styles.btnContainer}> 
      <TouchableOpacity onPress={() => signInClick()} style={signIn ? styles.btnSignin : styles.btnSignup}>
        <Text style={signIn ? styles.btnSigninText : styles.btnSingupText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signUpClick()} style={signIn ? styles.btnSignup : styles.btnSignin}>
        <Text style={signIn ? styles.btnSingupText : styles.btnSigninText }>Sign Up</Text>
      </TouchableOpacity>
      </View>

      {signIn ? <SignIn navigation={navigation}/> : <SignUp navigation={navigation}/>}

      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:20}}>
  <View style={{flex: 1, height: 0.5, marginLeft:20, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 50, textAlign: 'center', fontSize:16, fontWeight:'600', color:'#40c43a'}}>OR</Text>
  </View>
  <View style={{flex: 1, height: 0.5,  marginRight:20, backgroundColor: 'black'}} />
</View>

      <Text style={styles.socIconsSignText}>Sign in using :</Text>

<View style={styles.socialIconsContainer}>
        <TouchableOpacity>
        <Image style={styles.socIcons} source={require('../../assets/img/google.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.socIcons} source={require('../../assets/img/facebook.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.socIcons} source={require('../../assets/img/twitter.png')}/>
      </TouchableOpacity>
      </View>

      </View>
  ); 
}

export default AuthenScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems:'center',    
    paddingTop:'32%',    
    paddingBottom:'100%',
    justifyContent:'center',
  },

  image: {
    marginBottom: 10,
    width:150,
    height: 150,
  },  

  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    marginBottom:10,
  },

  btnSignin: {
    borderBottomColor: "#40c43a",
    borderBottomWidth: 3,    
    borderRadius:15,
    padding:5,
    width: "45%",
    marginBottom:20,
  },

  btnSignup: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 3,    
    borderRadius:15,
    padding:5,
    width: "45%", 
    marginBottom:20,
  },
  
  btnSigninText:{
    color:'#ff1c0e',
    fontSize: 18,
    textAlign:'center',
  },

  btnSingupText:{
    color:'#f77f78',
    fontSize: 18,
    textAlign:'center',
  },

  socIconsSignText:{
    fontSize:16,
    fontWeight:'600',
    marginBottom:20,
  },

  socialIconsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width: '50%',
  },

  socIcons:{
    width:30,
    height:30,
  },  

})