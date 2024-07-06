import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Colors, appFontFamily } from "@/constants/Colors";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const _layout = () => {
  const [loaded, error] = useFonts({
    Popins: require("@/assets/fonts/Poppins-Regular.ttf"),
  });

  console.log("Chargement de police");

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    console.log("Not found font");
    return;
  }

  return <Slot />;
};

export default _layout;
