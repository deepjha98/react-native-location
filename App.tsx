import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationPath } from "@src/utils";
import { GlobalStyles } from "@src/constants/colors";
import AllPlaces from "@src/screens/AllPlaces";
import AddPlace from "@src/screens/AddPlace";
import IconButton from "@src/components/UI/IconButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: GlobalStyles.colors.gray700,
            contentStyle: { backgroundColor: GlobalStyles.colors.gray700 },
          }}
        >
          <Stack.Screen
            name={NavigationPath.ALL_PLACES}
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your favorite places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  name="add-outline"
                  color={tintColor}
                  // TODO : Add press handler
                  onPress={() => navigation.navigate(NavigationPath.ADD_PLACE)}
                />
              ),
            })}
          />
          <Stack.Screen
            name={NavigationPath.ADD_PLACE}
            component={AddPlace}
            options={{ title: "Add a new place" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
