import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { StripeProvider } from "@stripe/stripe-react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useLayoutEffect } from "react";
import "react-native-get-random-values";
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

  useLayoutEffect(() => {
    GoogleSignin.configure();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <StripeProvider
      publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""}
      // merchantIdentifier="merchant.identifier"
      // urlScheme="your-url-scheme"
    >
      <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
      </Stack>
    </StripeProvider>
  );
}
