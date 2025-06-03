import { useRouter } from "expo-router";
import { FC } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import IconButton from "../../../../src/components/IconButton";

const Home: FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text>Welcome Ammar</Text>
          <IconButton onPress={() => router.push("/(root)/(tabs)/chat")}>
            <Image source={require("@/assets/icons/out.png")} />
          </IconButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
