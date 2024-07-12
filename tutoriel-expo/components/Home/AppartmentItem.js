import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const AppartmentItem = ({ item }) => {
  const handleTouchImage = () => {
    router.navigate({
      pathname: "/houses/[id]",
      params: { id: item.id },
    });
  };

  // -replace : l'url actuel et il le remplacera par le nouveau
  // -Push : ajoute la nouvelle url au dessus de l'ancienne
  // -Navigate: conserve l'url precedente et va a l'Url demandé

  return (
    <TouchableOpacity style={styles.imageBlock} onPress={handleTouchImage}>
      <ImageBackground
        source={{
          uri: item.cover_image_url,
        }}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Enregistrer Nouvellement</Text>
          </View>
        </View>
      </ImageBackground>

      <View>
        <View style={styles.rowBetween}>
          <Text style={styles.houseLocation}>{item.location_city}</Text>

          <View style={styles.tagContainer}>
            <Text style={styles.tagNoteText}>5.0</Text>

            <AntDesign name="star" size={20} color="#ff9e81" />
          </View>
        </View>
        <View style={[styles.rowBetween, styles.mt1]}>
          <Text style={styles.monthPrice}>${item.month_price}/mois</Text>

          <View style={styles.tagContainer}>
            <AntDesign name="user" size={20} color="#ff9e81" />

            <Text style={styles.tagNoteText}>3 visites</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBlock: {
    width: 320,
    gap: 10,
  },

  imageBackground: {
    height: 200,
    borderRadius: 30,
    overflow: "hidden",
    padding: 15,
  },

  tag: {
    padding: 5,
    backgroundColor: "#4e5ac8",
    opacity: 0.9,
    borderRadius: 30,
  },

  tagText: {
    color: "white",
    padding: 4,
  },

  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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

  houseLocation: {
    fontSize: 25,
  },
  monthPrice: {
    fontSize: 20,
    color: "grey",
  },
  mt1: {
    marginTop: 10,
  },
});

export default AppartmentItem;
