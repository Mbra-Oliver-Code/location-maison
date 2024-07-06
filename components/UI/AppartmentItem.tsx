import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors, appFontFamily } from "@/constants/Colors";
import { router } from "expo-router";

const AppartmentItem = ({ item }: { item: any }) => {
  const handlePress = () => {
    router.navigate({
      pathname: "/houses/[id]",
      params: { id: "bacon" },
    });
  };

  return (
    <TouchableOpacity style={styles.root} onPress={handlePress}>
      <ImageBackground
        source={{
          uri: item.cover_image_url,
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>Enregistrer nouvellement</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={{ marginTop: 10 }}>
        <View style={styles.rowBetween}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: appFontFamily,
            }}
          >
            {item.location_city}
          </Text>

          <View style={styles.tagPointContainer}>
            <AntDesign name="star" size={24} color={Colors.light.mainColor} />
            <Text style={{ fontSize: 20, fontFamily: appFontFamily }}>5.0</Text>
          </View>
        </View>
        <View style={[styles.rowBetween, styles.mt1]}>
          <Text
            style={{
              fontSize: 20,
              color: "gray",
              fontFamily: appFontFamily,
            }}
          >
            {item.month_price}$ / mois
          </Text>

          <View style={styles.tagPointContainer}>
            <AntDesign name="user" size={24} color={Colors.light.mainColor} />
            <Text style={{ fontSize: 16, fontFamily: appFontFamily }}>
              3 visiteurs
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  root: {
    width: 320,
  },
  image: {
    height: 200,

    borderRadius: 30,
    overflow: "hidden",
    padding: 10,
  },

  tag: {
    padding: 5,
    backgroundColor: Colors.light.secondaryColor,
    opacity: 0.9,
    borderRadius: 30,
  },

  tagText: {
    color: "white",
    padding: 4,
  },

  tagPointContainer: {
    backgroundColor: Colors.light.lightGray,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 5,
    borderRadius: 5,
  },

  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mt1: {
    marginTop: 10,
  },
});
export default AppartmentItem;
