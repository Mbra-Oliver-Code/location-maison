import { View, StyleSheet, ScrollView } from "react-native";
import AppartmentList from "@/components/Home/AppartmentList";
import GreetingUser from "@/components/UI/GreetingUser";
import Users from "@/components/Home/Users";
import PostList from "@/components/Posts/PostList";
const page = () => {
  return (
    <ScrollView
      style={styles.appContainer}
      showsVerticalScrollIndicator={false}
    >
      <GreetingUser />

      <View>
        <AppartmentList />
        <Users />

        <PostList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default page;
