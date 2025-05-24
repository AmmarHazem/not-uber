import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

const PrimaryButton: FC<PrimaryButtonProps> = ({ text, leadingIcon, textClassName, className, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className={`bg-blue-500 flex-row justify-center gap-4 items-center rounded-full px-4 py-5 ${className}`}
      onPress={onPress}
    >
      {leadingIcon}
      <Text className={`text-white text-lg text-center font-bold ${textClassName}`}>{text}</Text>
    </TouchableOpacity>
  );
};

interface PrimaryButtonProps {
  text: string;
  className?: string;
  textClassName?: string;
  leadingIcon?: React.ReactNode;
  onPress?: () => void;
}

export default PrimaryButton;
