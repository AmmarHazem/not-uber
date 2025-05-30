import { FC } from "react";
import { ActivityIndicator, StyleProp, Text, TextStyle, TouchableOpacity } from "react-native";

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  loading,
  disabled,
  leadingIcon,
  textClassName,
  className,
  textStyle,
  onPress,
}) => {
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
          <Text style={textStyle} className={`text-white text-lg text-center font-bold ${textClassName}`}>
            {text}
          </Text>
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
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export default PrimaryButton;
