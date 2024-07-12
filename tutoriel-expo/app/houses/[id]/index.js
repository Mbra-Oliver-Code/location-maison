import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import houseList from "@/assets/datas/datas-appartement.json";
import { useLocalSearchParams, router } from "expo-router";
import { AntDesign, EvilIcons, FontAwesome6 } from "@expo/vector-icons";

import HouseCommodities from "@/components/UI/HouseCommoditie";

const Page = () => {
  const { id } = useLocalSearchParams();
  const house = houseList.find((houseItem) => houseItem.id === parseInt(id));

  if (!house) {
    return;
  }

  const goBack = () => {
    if (router.canGoBack) {
      router.back();
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{
            uri: house.cover_image_url,
          }}
          resizeMode="cover"
          style={[styles.mainImage, styles.p15]}
        >
          <TouchableOpacity style={styles.roundedButton} onPress={goBack}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.p15}>
          <Text style={styles.houseName}>{house.name}</Text>

          <View style={[styles.rowCenter, styles.mt10]}>
            <EvilIcons name="location" size={24} color="black" />
            <Text style={styles.houseLocation}>
              {house.location_city} - {house.location_adresse}
            </Text>
          </View>

          <View style={[styles.rowCenter, styles.mt20, styles.justifyBetween]}>
            <Text style={styles.amount}>300$</Text>

            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>5</Text>
              <AntDesign name="star" size={20} color={"#ff9e81"} />
            </View>
          </View>
        </View>

        <View style={styles.mt20}>
          <HouseCommodities datas={house.commodities} />
        </View>

        <View style={styles.p15}>
          <Text style={styles.description}>{house.longText}</Text>

          <Pressable style={styles.locationButton}>
            <FontAwesome6 name="money-check" size={30} color="white" />
            <Text style={styles.locationText}>Louer cette maison</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  mainImage: {
    aspectRatio: 4 / 3,
  },

  roundedButton: {
    width: 50,
    height: 50,
    backgroundColor: "#4e5ac8",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  p15: {
    padding: 15,
  },
  mt10: {
    marginTop: 10,
  },

  mt20: {
    marginTop: 20,
  },

  houseName: {
    fontSize: 25,
    fontWeight: "700",
  },

  houseLocation: {
    color: "gray",
  },

  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },

  justifyBetween: {
    justifyContent: "space-between",
  },

  amount: {
    fontSize: 30,
    fontWeight: "300",
  },

  tagContainer: {
    backgroundColor: "#f4f4f4",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 8,
  },

  tagText: {
    fontSize: 20,
    color: "black",
  },

  description: {
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 20,
  },

  locationButton: {
    marginTop: 30,
    marginBottom: 5,
    backgroundColor: "#4e5ac8",
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    borderRadius: 5,
  },
  locationText: {
    color: "white",
    fontSize: 20,
  },
});

export default Page;
