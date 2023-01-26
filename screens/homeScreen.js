import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/bg.png")}
      >
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
          <View styles={styles.title}>
            <Text style={styles.titleText}>estação espacial online</Text>
          </View>
          <TouchableOpacity
            style={styles.routeButton}
            onPress={() => {
              this.props.navigation.navigate("eei");
            }}
          >
            <Text style={styles.routeText}>rastrear EEi</Text>

            <Image
              source={require("../assets/iss_icon.png")}
              style={styles.iconImage}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeButton}
            onPress={() => {
              this.props.navigation.navigate("meteor");
            }}
          >
            <Text style={styles.routeText}>rastrear meteoro</Text>

            <Image
              source={require("../assets/meteor_icon.png")}
              style={styles.iconImage}
            ></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgba(0,0,0,0.25)" },
  title: {
    flex: 0.15,

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  routeButton: {
    flex: 0.25,
    marginLeft: 50,
    marginTop: 50,
    marginRight: 50,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
  },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 60,
    paddingLeft: 25,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",

    width: "100%",
  },

  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },

  iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    right: -30,
    top: -90,
  },

  knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15,
  },

  bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
});
