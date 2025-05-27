import { getAuth, signInWithEmailAndPassword } from "@react-native-firebase/auth";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

export default function useFirebaseSignInWithEmail() {
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(async ({ email, password }: { email: string; password: string }) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(getAuth(), email, password);
      return result.user;
    } catch (error) {
      console.log("Error signing in with email:", error);
      setLoading(false);
      Alert.alert("Invalid Credentials", undefined, [{ text: "OK", style: "cancel" }]);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { signIn, loading };
}
