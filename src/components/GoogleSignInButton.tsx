import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import { FC, useCallback, useEffect, useState } from "react";
import { Alert, Image } from "react-native";
import PrimaryButton from "./PrimaryButton";

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ className }) => {
  const router = useRouter();
  const [hasPlayServices, setHasPlayServices] = useState(false);
  const [loadingHasPlayServices, setLoadingHasPlayServices] = useState(true);

  useEffect(() => {
    (async () => {
      const value = await GoogleSignin.hasPlayServices();
      setHasPlayServices(value);
      setLoadingHasPlayServices(false);
    })();
  }, []);

  const onPress = useCallback(async () => {
    if (!hasPlayServices) {
      return Alert.alert("Google Play Services Not Available", "Please install or update Google Play Services to continue.", [
        { text: "OK", style: "default" },
      ]);
    }
    const response = await GoogleSignin.signIn();
    if (response.type === "success") {
      router.replace("/(root)/(tabs)/home");
    } else {
      Alert.alert("Sign In Failed", "Please try again.", [{ text: "OK", style: "default" }]);
    }
  }, [hasPlayServices, router]);

  return (
    <PrimaryButton
      onPress={onPress}
      disabled={loadingHasPlayServices}
      loading={loadingHasPlayServices}
      text={"Continue with Google"}
      textClassName="text-black font-semibold"
      className={`bg-white border border-1 border-neutral-200 ${className}`}
      leadingIcon={<Image source={require("@/assets/icons/google.png")} resizeMode="contain" className="size-6" />}
    />
  );
};

interface GoogleSignInButtonProps {
  className?: string;
}

export default GoogleSignInButton;
