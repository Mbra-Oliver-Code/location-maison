import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";

const _layout = () => {
  return (
    <>
      <Slot />
    </>
  );
};

export default _layout;
