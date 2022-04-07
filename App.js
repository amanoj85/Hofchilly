import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthenScreen from './src/screens/AuthenScreen';
import SignIn from './src/components/SignIn';
import { createAppContainer } from 'react-navigation';
import HomePage from './src/screens/HomePage';
import SignUp from './src/components/SignUp';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="authenScreen"
//           component={AuthenScreen}
//           options={{ title: 'Get started' }}
//         />
//         <Stack.Screen name="homeScreen" component={HomePage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };



// const navigator = createStackNavigator (
//   {
//     Authentication: AuthenScreen,
//     Login: SignIn,
//     Home: HomePage,
//     Registration: SignUp

//   },
  
//   {
//     initialRouteName:'AuthenScreen',
//     defaultNavigationOptions:{
//       title:'App'
//     }
//   },
// );


// export default createAppContainer(navigator);

// export default App;

export default function App() 

{
      
  return (
    <View>
      <HomePage/>
    </View>
  ); 
}