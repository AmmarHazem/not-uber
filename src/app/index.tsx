import { useRouter } from "expo-router";
import { FC, useEffect } from "react";
import { Text, View } from "react-native";
import useFirebaseAuthStatus from "../hooks/useFirebaseAuthStatus";

const SplashScreen: FC = () => {
  const { isInitializing, user } = useFirebaseAuthStatus();
  const router = useRouter();

  useEffect(() => {
    if (isInitializing) return;
    console.log("SplashScreen: isInitializing", isInitializing, user);
    if (user) {
      router.replace("/(root)/(tabs)/home");
    } else {
      router.replace("/(auth)/sign-in");
    }
  }, [isInitializing, router, user]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Splash Screen</Text>
    </View>
  );
};
export default SplashScreen;
