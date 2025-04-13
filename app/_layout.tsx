import colors from "@/src/colors";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.backgroundColor} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
