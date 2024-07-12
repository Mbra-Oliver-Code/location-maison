import { Text, FlatList, View, StyleSheet } from "react-native";

const HouseCommodities = ({ datas }) => {
  console.log(datas);
  return (
    <FlatList
      horizontal
      data={datas}
      contentContainerStyle={styles.root}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.trim().toLowerCase().toString()}
      renderItem={({ item }) => (
        <View style={styles.tagContainer}>
          <Text>{item.trim()}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 20,
    paddingHorizontal: 15,
  },
  tagContainer: {
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderRadius: 15,
  },
});

export default HouseCommodities;
