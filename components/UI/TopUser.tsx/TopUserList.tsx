import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import TopUserItem from "./TopUserItem";
import userDatas from "@/assets/data/datas-user.json";
import { appFontFamily } from "@/constants/Colors";
const TopUserList = () => {
  return (
    <View style={{ gap: 20 }}>
      <Text style={{ fontFamily: appFontFamily, fontSize: 25 }}>
        Nos meilleurs propriétaires
      </Text>
      <FlatList
        data={userDatas}
        contentContainerStyle={styles.root}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <TopUserItem user={item} />}
        keyExtractor={(item) => item.id + Math.floor(Math.random() * 1000)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 20,
  },
});
export default TopUserList;
