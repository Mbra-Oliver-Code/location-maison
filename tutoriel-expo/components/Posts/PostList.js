import { View, Text, StyleSheet } from "react-native";
import PostListDatas from "@/assets/datas/datas-post.json";
import PostItem from "./PostItem";
const PostList = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Dernières publications</Text>

      {PostListDatas.map((post) => (
        <PostItem postData={post} key={post.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
    marginHorizontal: 15,
  },

  title: {
    fontSize: 25,
    marginBottom: 20,
  },
});

export default PostList;
