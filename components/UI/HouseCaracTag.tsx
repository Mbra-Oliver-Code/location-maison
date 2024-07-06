import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors, appFontFamily } from "@/constants/Colors";

const HouseCaracTag = ({ tagValue }: { tagValue: string }) => {
  return (
    <TouchableOpacity style={styles.tagPointContainer}>
      <Text style={{ fontFamily: appFontFamily }}>{tagValue}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tagPointContainer: {
    backgroundColor: Colors.light.darkGray,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 10,
    borderRadius: 15,
  },
});

export default HouseCaracTag;
