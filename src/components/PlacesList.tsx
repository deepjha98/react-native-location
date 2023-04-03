import { StyleSheet, FlatList, View, Text } from "react-native";
import React from "react";

import { Place } from "@src/models/place";
import PlaceItem from "./PlaceItem";
import ViewToggleBox from "./ViewToggleBox";
import { GlobalStyles } from "@src/constants/colors";

type Props = { places?: Place[] };

const PlacesList = ({ places }: Props) => {
  return (
    <ViewToggleBox
      conditions={[!places, places?.length === 0]}
      alternative={
        <FlatList
          data={places}
          keyExtractor={(place) => place.id}
          renderItem={({ item }) => (
            <PlaceItem place={item} onSelect={() => {}} />
          )}
        />
      }
    >
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet</Text>
      </View>
    </ViewToggleBox>
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: GlobalStyles.colors.primary200,
  },
});
