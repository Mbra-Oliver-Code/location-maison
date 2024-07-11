import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const PostActionIcon = ({ iconName, label, iconColor }) => {
  return (
    <View style={styles.root}>
      <AntDesign name={iconName} size={20} color={iconColor} />
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default PostActionIcon;
