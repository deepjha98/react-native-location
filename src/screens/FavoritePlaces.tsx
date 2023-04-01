import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { FavoritePlace } from "@src/utils/ts/interface";
import { GlobalStyles } from "@src/constants/colors";

type Props = {};

const DUMMY_DATA = [
  {
    title: "Test123",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    location: `Keas 69 Str.
      15234, Chalandri
      Athens,
      Greece
      `,
  },
  {
    title: "Mountains",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    location: `Keas 69 Str.
      15234, Chalandri
      Athens,
      Greece
      `,
  },
];

const FavoritePlaces = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>FavoritePlaces</Text>
    </View>
  );
};

export default FavoritePlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: GlobalStyles.colors.tertiary,
  },
});
