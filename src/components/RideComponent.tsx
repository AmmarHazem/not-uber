import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { FC, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { icons } from "../constants";
import MyMap from "./MyMap";

const RideComponent: FC<RideComponentProps> = ({ title, snapPoints, children }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();

  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <View className="flex-col h-screen bg-blue-500">
          <View className="flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Image source={icons.backArrow} resizeMode="contain" className="w-6 h-6" />
              </View>
            </TouchableOpacity>
            <Text className="text-xl font-JakartaSemiBold ml-5">{title ?? "Go back"}</Text>
          </View>
          <MyMap style={{ borderRadius: 0, height: "100%" }} />
        </View>
        <BottomSheet keyboardBehavior="interactive" ref={bottomSheetRef} snapPoints={snapPoints ?? ["40%", "85%"]} index={1}>
          <BottomSheetView style={{ flex: 1, padding: 20 }}>{children}</BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

interface RideComponentProps {
  children?: React.ReactNode;
  title?: string;
  snapPoints?: string[];
}

export default RideComponent;
