import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Jakarta-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(root)" />
    </Stack>
  );
}
