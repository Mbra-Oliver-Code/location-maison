import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import AppartmentList from "@/components/UI/appartmentList";
import TopUserList from "@/components/UI/TopUser.tsx/TopUserList";
import { Colors, appFontFamily } from "@/constants/Colors";
import PostList from "@/components/UI/posts/postList";
import { StatusBar } from "expo-status-bar";
import ScrollToTopButton from "@/components/UI/ScrollToTop";
const Page = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1 }}>
        <ScrollToTopButton onPress={scrollToTop} />
        <StatusBar style="dark" />

        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Découvrir</Text>

          <AntDesign name="search1" size={30} color="black" />
        </View>

        <View style={{ paddingLeft: 15, gap: 30 }}>
          <AppartmentList />
          <TopUserList />
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <PostList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  greeting: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 15,
  },

  greetingText: {
    fontSize: 30,
    fontWeight: "semibold",
    fontFamily: appFontFamily,
  },
});

export default Page;
