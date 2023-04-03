import {
  StyleSheet,
  Text,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@src/constants/colors";

type Props = {
  size?: number;
  color: string | undefined;
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
};

const OutlineButton = ({ iconName, children, onPress }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons
        style={styles.icon}
        name={iconName}
        size={18}
        color={GlobalStyles.colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary500,
  },
  pressed: {
    opacity: 0.75,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: GlobalStyles.colors.primary500,
  },
});
