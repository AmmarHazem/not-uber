import { getAuth, GoogleAuthProvider, signInWithCredential } from "@react-native-firebase/auth";
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
    const idToken = response.data?.idToken;
    if (!idToken) {
      return Alert.alert("no idToken found", undefined, [{ text: "OK", style: "default" }]);
    }
    const googleCredential = GoogleAuthProvider.credential(idToken);
    const signInResult = await signInWithCredential(getAuth(), googleCredential);
    if (signInResult.user) {
      router.push("/home");
    } else {
      return Alert.alert("Failed to sign in with Google", "Please try again", [{ text: "OK", style: "default" }]);
    }
  }, [hasPlayServices, router]);

  return (
    <PrimaryButton
      onPress={onPress}
      disabled={loadingHasPlayServices}
      loading={loadingHasPlayServices}
      text={"Continue with Google"}
      textStyle={{ color: "black" }}
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
