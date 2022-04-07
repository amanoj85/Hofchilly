import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ImageBackground } from 'react-native'
import React , {useState} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomePage = () => {

  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/img/menu.png')}/>
        <Image source={require('../../assets/img/cart.png')}/>
      </View>

      <View>
        <Text style={styles.helloText}>Hello Chinwe,</Text>        
      </View>

      <View>
      <Text style={styles.mainHeadText}>What would you like to</Text>
      <Text style={styles.eatText}>eat?</Text>
      </View>

<View>
  <TouchableOpacity style={styles.searchContainer}>
    <View>
      <Image source={require('../../assets/img/search.png')} />
      <TextInput
        style={styles.TextInput}
        placeholder="Enter a dish name e.g. salad"
        placeholderTextColor="#003f5c"
        onChangeText={(search) => setSearch(search)}
      />
      <Image source={require('../../assets/img/equalizer.png')} />
      <View style={{flex: 1, height: 0.5, marginLeft:20, backgroundColor: 'black'}} />
    </View>


  </TouchableOpacity>
</View>

    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})