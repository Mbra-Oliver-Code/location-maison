import {
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import houseList from "@/assets/datas/datas-appartement.json";
import { AntDesign } from "@expo/vector-icons";
import CommoditiesList from "@/components/UI/CommoditiesList";

const Page = () => {
  const { id } = useLocalSearchParams();

  const house = houseList.find((item) => item.id === parseInt(id));

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
          style={styles.image}
        >
          <TouchableOpacity
            style={styles.floatingButtonContainer}
            onPress={goBack}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.p15}>
          <Text style={styles.houseName}>{house.name}</Text>
          <Text style={{ marginTop: 10 }}>{house.location_city}</Text>

          <View style={styles.moneyRow}>
            <Text style={styles.money}>${house.month_price}</Text>

            <View style={styles.tagContainer}>
              <Text style={styles.tagNoteText}>5.0</Text>

              <AntDesign name="star" size={20} color="#ff9e81" />
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 20 }}>
          <CommoditiesList datas={house.commodities} />
        </View>

        <View style={styles.p15}>
          <Text style={{ fontSize: 18, textAlign: "justify" }}>
            {house.longText}
          </Text>

          <Pressable style={styles.locationButton}>
            <Text style={styles.buttonText}>Louer cette maison</Text>
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

  image: {
    aspectRatio: 4 / 3,
    padding: 15,
  },

  floatingButtonContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#4e5ac8",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  houseName: {
    fontSize: 25,
    fontWeight: "700",
  },

  p15: {
    padding: 15,
  },

  moneyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },

  money: {
    fontSize: 30,
    fontWeight: "300",
  },

  tagContainer: {
    backgroundColor: "#f4f4f4",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 5,
    padding: 5,
  },
  tagNoteText: {
    color: "black",
    fontSize: 20,
  },

  locationButton: {
    marginTop: 30,
    marginBottom: 1,
    backgroundColor: "#4e5ac8",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",

    elevation: 10,
  },

  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
export default Page;
