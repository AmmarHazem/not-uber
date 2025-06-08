import { icons } from "@/src/constants";
import { Tabs } from "expo-router";
import { FC } from "react";
import { Image, View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          padding: 0,
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 68,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          // tabBarActiveTintColor: "white",
          // tabBarInactiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return <TabIcon {...props} source={icons.home} />;
          },
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <TabIcon {...props} source={icons.list} />;
          },
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <TabIcon {...props} source={icons.chat} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <TabIcon {...props} source={icons.profile} />;
          },
        }}
      />
    </Tabs>
  );
}

const TabIcon: FC<{
  focused: boolean;
  color: string;
  size: number;
  source: any;
}> = ({ source, focused }) => {
  return (
    <View
      className={`flex flex-row items-center justify-center roudned-full ${focused ? "bg-general-300" : ""}`}
      style={{ width: 40, height: 40, borderRadius: 20 }}
    >
      <View className={`rounded-full size-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}>
        <Image source={source} tintColor={"white"} resizeMode="contain" className="w-7 h-7" />
      </View>
    </View>
  );
};
