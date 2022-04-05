import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import React, { useState } from "react";
import AuthenScreen from './src/screens/AuthenScreen';
import SignIn from './src/components/SignIn';

export default function App() {
  
    
  return (
    <View>
      <AuthenScreen />
    </View>
  ); 
}