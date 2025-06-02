import { getAuth, signOut } from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import { FC } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

const Home: FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-400">Home</Text>
        <Pressable
          onPress={async () => {
            await signOut(getAuth());
            router.replace("/(auth)/sign-in");
          }}
        >
          <Text className="text-blue-500">Sign Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
