import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import HouseCaracTag from "./HouseCaracTag";

const HouseCaracteristiqueList = () => {
  const datas = [
    "2 douches",
    "3 toilettes",
    "vue sur veranda",
    "4 pièces",
    "pour 8 personnes",
    "niche pour les chients",
  ];
  return (
    <FlatList
      data={datas}
      contentContainerStyle={styles.root}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <HouseCaracTag tagValue={item} />}
      keyExtractor={(item) =>
        item.toLowerCase().toString() + Math.floor(Math.random() * 1000)
      }
    />
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 20,
  },
});

export default HouseCaracteristiqueList;
