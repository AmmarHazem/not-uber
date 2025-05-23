import { FC } from "react";
import { Pressable, Text } from "react-native";

const PrimaryButton: FC<PrimaryButtonProps> = ({ text, onPress }) => {
  return (
    <Pressable className="bg-blue-500 rounded-full px-4 py-5" onPress={onPress}>
      <Text className="text-white text-center font-semibold">{text}</Text>
    </Pressable>
  );
};

interface PrimaryButtonProps {
  text: string;
  onPress?: () => void;
}

export default PrimaryButton;
