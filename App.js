import * as React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler"
import HomeScreen from "./screens/homeScreen";
import EEIScreen from "./screens/eeiScreen";
import MeteorScreen from "./screens/meteorScreen";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="home"component = {HomeScreen}></Stack.Screen>
      <Stack.Screen name="eei"component = {EEIScreen}></Stack.Screen>
      <Stack.Screen name="meteor"component = {MeteorScreen}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

