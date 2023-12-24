import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";

export default function Index() {
  return (
    <View className="flex-1 flex justify-end bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="light" />
      <Image
        className="h-full w-full"
        source={require("../assets/images/welcome.png")}
      />
    </View>
  );
}
