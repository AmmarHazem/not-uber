import { Link, useRouter } from "expo-router";
import { FC, useCallback, useMemo, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import GoogleSignInButton from "../../../src/components/GoogleSignInButton";
import InputField from "../../../src/components/InputField";
import PrimaryButton from "../../../src/components/PrimaryButton";
import useFirebaseSignInWithEmail from "../../../src/hooks/useFirebaseSignInWithEmail";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { loading, signIn } = useFirebaseSignInWithEmail();

  const handleSignIn = useCallback(async () => {
    const result = await signIn({ email, password });
    if (result?.uid) {
      router.replace("/(root)/(tabs)/home");
    } else {
      console.log("Sign in failed");
    }
  }, [email, password, router, signIn]);

  const disableSignIn = useMemo(() => {
    return !email || !password;
  }, [email, password]);

  return (
    <ScrollView className="bg-white flex-1 w-full h-full" contentContainerStyle={{ paddingBottom: 100 }}>
      <Image resizeMode="cover" className="w-full h-[300px]" source={require("@/assets/images/signup-car.png")} />
      <View className="px-8">
        <Text className="text-4xl w-full font-semibold">{`Welcome 👋🏽`}</Text>
        <View>
          <InputField
            label="Email"
            className="mt-8"
            value={email}
            props={{ autoCapitalize: "none", autoCorrect: false, autoComplete: "email" }}
            keyboardType="email-address"
            autoFocus={true}
            placeholder="Enter your email"
            onChangeText={setEmail}
            icon={<Image resizeMode="contain" source={require("@/assets/icons/email.png")} className="size-6" />}
          />
          <InputField
            label="Password"
            className="mt-8"
            value={password}
            password={true}
            placeholder="Enter your password"
            onChangeText={setPassword}
            icon={<Image resizeMode="contain" source={require("@/assets/icons/lock.png")} className="size-6" />}
          />
          <PrimaryButton loading={loading} disabled={disableSignIn} text={"Sign In"} onPress={handleSignIn} className="mt-8" />
          <GoogleSignInButton className="mt-8" />
          <View className="mt-8 flex-row justify-center items-center gap-2">
            <Text>Do not have an account ?</Text>
            <Link asChild href="/(auth)/sign-up" replace={true}>
              <TouchableOpacity>
                <Text className="text-blue-500 font-bold"> Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
