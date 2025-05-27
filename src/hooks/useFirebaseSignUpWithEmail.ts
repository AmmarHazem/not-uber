import { createUserWithEmailAndPassword, getAuth } from "@react-native-firebase/auth";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

export default function useFirebaseSignUpWithEmail() {
  const [loading, setLoading] = useState(false);

  const signUp = useCallback(async ({ email, password, name }: { name: string; email: string; password: string }) => {
    setLoading(true);
    try {
      const fireAuth = getAuth();
      const result = await createUserWithEmailAndPassword(fireAuth, email, password);
      await result.user.updateProfile({ displayName: name });
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

  return { signUp, loading };
}
