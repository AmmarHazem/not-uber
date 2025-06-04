import { IconSymbol } from "@/app-example/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import { FC } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import IconButton from "../../../../src/components/IconButton";

const Home: FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 50 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 500 }}>Welcome Ammar</Text>
          <IconButton onPress={() => router.push("/(root)/(tabs)/chat")}>
            <Image source={require("@/assets/icons/out.png")} style={{ width: 30 }} resizeMode="contain" />
          </IconButton>
        </View>
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 16,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#ddd",
            flexDirection: "row",
            gap: 8,
            borderRadius: 30,
            alignItems: "center",
            paddingHorizontal: 16,
            marginBottom: 32,
          }}
        >
          <IconSymbol name="magnifyingglass" color={"black"} />
          <TextInput style={{ paddingVertical: 16 }} placeholder="Where do you want to go ?" />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 500, paddingHorizontal: 16 }}>Your current location</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
