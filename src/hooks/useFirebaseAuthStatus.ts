import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";

export default function useFirebaseAuthStatus() {
  const [isInitializing, setIsInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setIsInitializing(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("--- useFirebaseAuthStatus", { isInitializing, user });

  return { isInitializing, user };
}
