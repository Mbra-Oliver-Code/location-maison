import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import appartmentList from "@/assets/data/datas-appartement.json";
import AppartmentItem from "./AppartmentItem";

const AppartmentList = () => {
  return (
    <FlatList
      data={appartmentList}
      contentContainerStyle={styles.root}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <AppartmentItem item={item} />}
      keyExtractor={(item) =>
        item.cover_image_url.toLowerCase().toString() +
        Math.floor(Math.random() * 1000)
      }
    />
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 20,
  },
});
export default AppartmentList;
