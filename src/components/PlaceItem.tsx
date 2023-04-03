import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { Place } from "@src/models/place";

type Props = { place: Place; onSelect: (event: GestureResponderEvent) => void };

const PlaceItem = ({ place, onSelect }: Props) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
