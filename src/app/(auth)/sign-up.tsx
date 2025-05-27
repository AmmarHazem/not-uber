import { Link, useRouter } from "expo-router";
import { FC, useCallback, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import GoogleSignInButton from "../../../src/components/GoogleSignInButton";
import InputField from "../../../src/components/InputField";
import PrimaryButton from "../../../src/components/PrimaryButton";
import useFirebaseSignUpWithEmail from "../../../src/hooks/useFirebaseSignUpWithEmail";

const SignUp: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { loading, signUp } = useFirebaseSignUpWithEmail();

  const handleSignUp = useCallback(async () => {
    const result = await signUp({ name, email, password });
    if (result?.uid) {
      router.replace("/(root)/(tabs)/home");
    }
  }, [email, name, password, router, signUp]);

  const disableSignUp = !name || !email || !password;

  return (
    <ScrollView className="bg-white flex-1 w-full h-full" contentContainerStyle={{ paddingBottom: 100 }}>
      <Image resizeMode="cover" className="w-full h-[300px]" source={require("@/assets/images/signup-car.png")} />
      <View className="px-8">
        <Text className="text-4xl w-full font-semibold">{`Create Your Account`}</Text>
        <View>
          <InputField
            label="Name"
            className="mt-8"
            autoFocus={true}
            value={name}
            placeholder="Enter your name"
            onChangeText={setName}
            icon={<Image resizeMode="contain" source={require("@/assets/icons/person.png")} className="size-6" />}
          />
          <InputField
            label="Email"
            className="mt-8"
            keyboardType="email-address"
            value={email}
            props={{ autoCapitalize: "none", autoCorrect: false, autoComplete: "email" }}
            placeholder="Enter your email"
            onChangeText={setEmail}
            icon={<Image resizeMode="contain" source={require("@/assets/icons/email.png")} className="size-6" />}
          />
          <InputField
            label="Password"
            className="mt-8"
            value={password}
            placeholder="Enter your password"
            onChangeText={setPassword}
            icon={<Image resizeMode="contain" source={require("@/assets/icons/lock.png")} className="size-6" />}
          />
          <PrimaryButton disabled={disableSignUp} loading={loading} text={"Sign Up"} onPress={handleSignUp} className="mt-8" />
          <GoogleSignInButton className="mt-8" />
          <View className="mt-8 flex-row justify-center items-center gap-2">
            <Text>Already have an account ?</Text>
            <Link asChild href="/(auth)/sign-in" replace={true}>
              <TouchableOpacity>
                <Text className="text-blue-500 font-bold"> Log In</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
