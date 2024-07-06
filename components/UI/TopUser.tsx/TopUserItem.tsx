import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors, appFontFamily } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

interface Owner {
  id: string;
  image: string;
  lastname: string;
  firstname: string;
  tel: string;
  email: string;
  totalOffers: number;
  totalStars: number;
}
const TopUserItem = ({ user }: { user: Owner }) => {
  return (
    <TouchableOpacity style={styles.root}>
      <View>
        <Image
          source={{
            uri: "https://yt3.googleusercontent.com/h0J2SiKItJb8I6MHIBQVuUcICRYMopgjpmjYJyY5XwNAzLRvZKVw7UNeJ-mMxFwVkAZGLDe9=s900-c-k-c0x00ffffff-no-rj",
          }}
          style={{
            width: 70,
            height: 70,
            objectFit: "cover",
            borderRadius: 15,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <AntDesign name="star" size={15} color={Colors.light.mainColor} />
        <AntDesign name="star" size={15} color={Colors.light.mainColor} />
        <AntDesign name="star" size={15} color={Colors.light.lightGray} />
        <AntDesign name="star" size={15} color={Colors.light.lightGray} />
      </View>

      <View>
        <Text
          style={{
            color: Colors.light.appBackground,
            fontFamily: appFontFamily,
            fontSize: 20,
          }}
        >
          {user.lastname} {user.firstname}
        </Text>
      </View>

      <View
        style={{
          marginTop: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.light.appBackground,
            fontFamily: appFontFamily,
            fontSize: 16,
          }}
        >
          +40
        </Text>

        <AntDesign
          name="arrowright"
          size={20}
          color={Colors.light.appBackground}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.light.secondaryColor,
    width: 170,
    padding: 10,
    borderRadius: 15,
  },
});

export default TopUserItem;
