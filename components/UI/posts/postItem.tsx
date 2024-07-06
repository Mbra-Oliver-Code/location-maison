import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors, appFontFamily } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const PostItem = ({ post }: { post: any }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.light.appBackground,

        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
      }}
    >
      <View style={{ gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <Image
            source={{
              uri: "https://yt3.googleusercontent.com/h0J2SiKItJb8I6MHIBQVuUcICRYMopgjpmjYJyY5XwNAzLRvZKVw7UNeJ-mMxFwVkAZGLDe9=s900-c-k-c0x00ffffff-no-rj",
            }}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
          <View>
            <Text
              style={{
                fontFamily: appFontFamily,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {post.userName}
            </Text>
            <Text
              style={{
                fontFamily: appFontFamily,
                fontSize: 12,
              }}
            >
              Il y'a 15 min
            </Text>
          </View>
        </View>

        {post.postPicture && (
          <Image
            source={{
              uri: post.postPicture,
            }}
            style={{ aspectRatio: 4 / 3 }}
          />
        )}

        <View style={{ padding: 15 }}>
          <Text style={{ fontFamily: appFontFamily, lineHeight: 25 }}>
            {post.post}
          </Text>

          <View
            style={{
              borderTopColor: Colors.light.lightGray,
              borderTopWidth: 1,
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <AntDesign
                name="heart"
                size={18}
                color={Colors.light.mainColor}
              />
              <Text style={{ fontFamily: appFontFamily, fontSize: 16 }}>
                {post.totalLike} réactions
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <AntDesign
                name="wechat"
                size={18}
                color={Colors.light.darkGray}
              />
              <Text style={{ fontFamily: appFontFamily, fontSize: 16 }}>
                {post.totalComment} comments
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;
