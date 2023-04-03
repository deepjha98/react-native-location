import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "@src/constants/colors";
import ImageTaker from "./ImageTaker";

type Props = {};

const PlaceForm = (props: Props) => {
  const [enteredTitle, setEnteredTitle] = useState<string>("");

  const handleTitleChange = (enteredText: string) => {
    setEnteredTitle(() => enteredText);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleTitleChange}
          value={enteredTitle}
        />
      </View>
      <ImageTaker />
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: GlobalStyles.colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: GlobalStyles.colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
