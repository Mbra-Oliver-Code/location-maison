import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import userDatas from "@/assets/data/datas-post.json";
import { appFontFamily } from "@/constants/Colors";
import PostItem from "./postItem";
const PostList = () => {
  return (
    <View style={{ gap: 20, marginBottom: 30, marginTop: 30 }}>
      <Text style={{ fontFamily: appFontFamily, fontSize: 25 }}>
        Dernières publications
      </Text>
      {userDatas.map((item) => (
        <PostItem key={item.post} post={item} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    gap: 20,
  },
});
export default PostList;
