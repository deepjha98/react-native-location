import {
  StyleSheet,
  Text,
  Button,
  View,
  Alert,
  Image,
  ImageURISource,
} from "react-native";
import React, { useState } from "react";

import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { GlobalStyles } from "@src/constants/colors";

type Props = {};

const ImageTaker = (props: Props) => {
  const [pickedImage, setPickedImage] = useState<any>("");

  const [cameraPermissionStatus, requestPermission] = useCameraPermissions();
  const verifyPermissions = async () => {
    if (cameraPermissionStatus?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionStatus?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "You need to give camera permissiones to continue"
      );
      return false;
    }

    return true;
  };

  const takeImageHandle = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;
    const image = await launchCameraAsync({
      allowsEditing: true,
      quality: 0.5,
      aspect: [16, 9],
    });

    console.log(image?.assets?.[0].uri);

    setPickedImage(() => image?.assets?.[0].uri);
  };

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandle} />
    </View>
  );
};

export default ImageTaker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 4,
  },
});
