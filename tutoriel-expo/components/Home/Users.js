import { FlatList, View, Text, StyleSheet } from "react-native";

import usersList from "@/assets/datas/datas-user.json";
import UserItem from "./UserItem";
const Users = () => {
  return (
    <View style={{ marginLeft: 15, gap: 20, marginTop: 30 }}>
      <Text style={styles.title}>Nos meilleurs utilisateurs</Text>

      <FlatList
        data={usersList}
        contentContainerStyle={styles.root}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserItem user={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 25,
  },
});
export default Users;
