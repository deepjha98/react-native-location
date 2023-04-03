import { StyleSheet, Pressable, GestureResponderEvent } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = {
  size?: number;
  color: string | undefined;
  name: keyof typeof Ionicons.glyphMap;
  onPress: (event: GestureResponderEvent) => void;
};

const IconButton = ({ size = 24, color, name, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
