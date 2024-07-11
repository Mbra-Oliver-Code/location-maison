import { FlatList, StyleSheet } from "react-native";

import houseList from "@/assets/datas/datas-appartement.json";
import AppartmentItem from "./AppartmentItem";

const page = () => {
  return (
    <FlatList
      data={houseList}
      contentContainerStyle={styles.flatListContainer}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(item) =>
        item.cover_image_url.toLowerCase().toString() +
        Math.floor(Math.random() * 1000)
      }
      renderItem={({ item }) => <AppartmentItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    gap: 20,
    marginLeft: 15,
    paddingRight: 20,
  },
});
export default page;
