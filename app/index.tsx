import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Redirect, Slot } from "expo-router";

const Page = () => {
  return <Redirect href={"/home"} />;
};

export default Page;
