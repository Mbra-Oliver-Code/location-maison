import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import datas from "@/assets/data/datas-appartement.json";
import { AntDesign } from "@expo/vector-icons";
import { Colors, appFontFamily } from "@/constants/Colors";
import HouseCaracteristiqueList from "@/components/UI/HouseCaracteristiqueList";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
const Page = () => {
  const data = datas[0];

  console.log(data);

  const onPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <SafeAreaView>
      <StatusBar style="light" backgroundColor={Colors.light.secondaryColor} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <ImageBackground
          source={{
            uri: data.cover_image_url,
          }}
          style={{ aspectRatio: 4 / 3, width: "100%" }}
        >
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <AntDesign name="arrowleft" size={20} color={"white"} />
          </TouchableOpacity>
        </ImageBackground>

        <View style={{ padding: 15, gap: 20 }}>
          <View style={{ gap: 5 }}>
            <Text
              style={{
                fontFamily: appFontFamily,
                fontSize: 25,
                fontWeight: "300",
              }}
            >
              {data.name}
            </Text>

            <Text
              style={{
                fontFamily: appFontFamily,
                fontSize: 15,
                color: Colors.light.pureGrey,
              }}
            >
              Abidjan
            </Text>
          </View>

          <View
            style={{
              gap: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: appFontFamily,
                fontSize: 30,
                color: Colors.light.solidGrey,
              }}
            >
              {data.month_price} $
            </Text>

            <View style={styles.tagPointContainer}>
              <AntDesign name="star" size={24} color={Colors.light.mainColor} />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: appFontFamily,
                  fontWeight: "bold",
                }}
              >
                5.0
              </Text>
            </View>
          </View>
        </View>

        <HouseCaracteristiqueList />

        <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
          <Text
            style={{
              fontFamily: appFontFamily,
              fontSize: 18,
              textAlign: "justify",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <Pressable style={styles.appointmentButton}>
            <Text
              style={{
                color: "white",
                fontFamily: appFontFamily,
                fontSize: 20,
              }}
            >
              Louer cette maison
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 20,
    left: 15,
    backgroundColor: Colors.light.secondaryColor, // Example color from your Colors constant
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999, // Ensure it's above other content
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  appointmentButton: {
    marginTop: 30,
    width: "100%",
    padding: 15,
    backgroundColor: Colors.light.secondaryColor, // Example color from your Colors constant
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999, // Ensure it's above other content
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  tagPointContainer: {
    backgroundColor: Colors.light.darkGray,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 5,
    borderRadius: 5,
  },
});
export default Page;
