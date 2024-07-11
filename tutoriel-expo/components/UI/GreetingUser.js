import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const GreetingUser = () => {
  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.greetingText}>Découvrir</Text>

      <AntDesign name="search1" size={30} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 50,
    marginBottom: 30,
  },

  greetingText: {
    fontSize: 30,
    fontWeight: "semibold",
  },
});

export default GreetingUser;
