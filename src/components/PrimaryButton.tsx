import { FC } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const PrimaryButton: FC<PrimaryButtonProps> = ({ text, loading, disabled, leadingIcon, textClassName, className, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={disabled || loading}
      className={`bg-blue-500 flex-row justify-center gap-4 items-center rounded-full px-4 py-5 ${
        disabled ? "opacity-50" : undefined
      } ${className}`}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <>
          {leadingIcon}
          <Text className={`text-white text-lg text-center font-bold ${textClassName}`}>{text}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

interface PrimaryButtonProps {
  text: string;
  className?: string;
  textClassName?: string;
  loading?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  onPress?: () => void;
}

export default PrimaryButton;
