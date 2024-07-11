import { View, Text, StyleSheet, Alert, Pressable, Image } from "react-native";
import PostActionIcon from "./PostActionIcon";

const PostItem = ({ postData }) => {
  const auClick = () => {
    //Alert.alert("Vous avez cliquer sur le post");
  };

  return (
    <Pressable onPress={auClick} style={styles.root}>
      <View>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://yt3.googleusercontent.com/h0J2SiKItJb8I6MHIBQVuUcICRYMopgjpmjYJyY5XwNAzLRvZKVw7UNeJ-mMxFwVkAZGLDe9=s900-c-k-c0x00ffffff-no-rj",
            }}
            style={styles.userImage}
          />
          <View>
            <Text style={styles.userName}>{postData.userName}</Text>
            <Text style={styles.postDate}>Il y'a 3 min</Text>
          </View>
        </View>

        {postData.postPicture && (
          <Image
            source={{
              uri: postData.postPicture,
            }}
            style={styles.postImage}
          />
        )}

        <View style={styles.postContainer}>
          <Text style={styles.postText}>{postData.post}</Text>

          <View style={styles.postActionsContainer}>
            <PostActionIcon
              iconName={"heart"}
              label="40 réactions"
              iconColor={"#ff9e81"}
            />
            <PostActionIcon
              iconName={"wechat"}
              label="25 commentaires"
              iconColor={"gray"}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 12,
    marginBottom: 20,
  },

  header: {
    flexDirection: "row",
    gap: 15,
    padding: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  userName: {
    fontWeight: "bold",
    fontSize: 20,
  },

  postDate: {
    fontSize: 12,
  },

  postImage: {
    aspectRatio: 4 / 3,
  },

  postContainer: {
    padding: 15,
  },
  postText: {
    lineHeight: 25,
  },

  postActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#f2f2f2",
    borderTopWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 15,
  },
});

export default PostItem;
