import { View, Text } from "react-native";
import { Redirect } from "expo-router";

const Page = () => {
  return <Redirect href={"/accueil"} />;
};

export default Page;

/*
=> 2 pages
 -Accueil
 -Détails de maison

*/
