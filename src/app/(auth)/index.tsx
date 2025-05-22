import PrimaryButton from "@/src/components/PrimaryButton";
import { FC } from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";

const Welcome: FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex-col justify-between">
      <View className="pt-10 flex-row justify-end px-8 items-center">
        <Pressable hitSlop={16}>
          <Text className="font-semibold">Skip</Text>
        </Pressable>
      </View>
      <View className="flex-1">
        <Image source={require("@/assets/images/onboarding1.png")} className="w-full h-[400px]" resizeMode="contain" />
        <Text className="text-4xl px-4 font-bold text-center mb-4">The best car in your hand with Ryde</Text>
        <Text className="text-center px-4 text-gray-500">
          Discover the convenience of finding your perfect ride with our Ryde App
        </Text>
      </View>
      <View className="px-4 mb-10">
        <PrimaryButton text="Next" />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
