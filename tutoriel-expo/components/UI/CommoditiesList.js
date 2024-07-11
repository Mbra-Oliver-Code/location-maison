import { FlatList, View, Text, StyleSheet } from "react-native";

const CommoditiesList = ({ datas }) => {
  console.log(datas);
  return (
    <FlatList
      data={datas}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 20, paddingHorizontal: 15 }}
      keyExtractor={(item) => item.toLowerCase().trim().toString()}
      renderItem={({ item }) => (
        <View style={styles.tagContainer}>
          <Text style={{ fontWeight: "400" }}>{item}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: "#f4f4f4",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    borderRadius: 15,
  },
});

export default CommoditiesList;
