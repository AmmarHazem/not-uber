import { useRouter } from "expo-router";
import { FC } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { IconSymbol } from "../../../../app-example/components/ui/IconSymbol";
import IconButton from "../../../../src/components/IconButton";
import MyMap from "../../../../src/components/MyMap";

const Home: FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 50, paddingBottom: 50 }}>
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
        <View style={{ marginHorizontal: 16, marginVertical: 16 }}>
          <MyMap />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 500, paddingHorizontal: 16, marginBottom: 8 }}>Recent Rides</Text>
        <RideCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const RideCard: FC = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 16,
        marginHorizontal: 16,
        paddingVertical: 16,
        paddingHorizontal: 16,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <View style={{ flex: 1, aspectRatio: 1, backgroundColor: "#eee", borderRadius: 8 }} />
        <View style={{ gap: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <IconSymbol name={"chevron.forward"} color={"black"} />
            <Text style={{ fontSize: 16 }}>104 Technical Scissors building</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <IconSymbol name={"pin.circle.fill"} color={"black"} />
            <Text style={{ fontSize: 16 }}>Ammar</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "#eee", paddingHorizontal: 16, paddingVertical: 16, borderRadius: 8, marginTop: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ color: "#aaa", fontSize: 16 }}>Date & Time</Text>
          <Text style={{ fontSize: 16 }}>5:30 PM 5th of June</Text>
        </View>
        <View style={{ height: 1, backgroundColor: "white", marginTop: 16, marginBottom: 16 }} />
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ color: "#aaa", fontSize: 16 }}>Driver</Text>
          <Text style={{ fontSize: 16 }}>Jane Cooper</Text>
        </View>
        <View style={{ height: 1, backgroundColor: "white", marginTop: 16, marginBottom: 16 }} />
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ color: "#aaa", fontSize: 16 }}>Car Seats</Text>
          <Text style={{ fontSize: 16 }}>4</Text>
        </View>
        <View style={{ height: 1, backgroundColor: "white", marginTop: 16, marginBottom: 16 }} />
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ color: "#aaa", fontSize: 16 }}>Payment Status</Text>
          <Text className="text-green-500">Paid</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
