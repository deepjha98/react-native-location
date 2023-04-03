import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
  alternative?: React.ReactNode;
  conditions: Boolean[];
};

const ViewToggleBox = ({ children, conditions, alternative }: Props) => {
  const childVisible = conditions.every(Boolean);
  return <>{childVisible ? children : alternative ? alternative : <></>}</>;
};

export default ViewToggleBox;

const styles = StyleSheet.create({});
