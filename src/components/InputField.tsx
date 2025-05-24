import { FC } from "react";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";

const InputField: FC<InputFieldProps> = ({
  icon,
  className,
  password,
  placeholder,
  onChangeText,
  value,
  label,
  labelClassName,
}) => {
  return (
    <KeyboardAvoidingView className={`${className}`}>
      <Text className={`${labelClassName} font-semibold`}>{label}</Text>
      <View className="rounded-full bg-neutral-100 mt-4 border px-4 py-2 border-neutral-300 focus:border-primary-500 flex-row gap-2 items-center">
        {icon}
        <TextInput
          secureTextEntry={password}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className="flex-1 py-2"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

interface InputFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  icon?: React.ReactNode;
  labelClassName?: string;
  password?: boolean;
  className?: string;
  onChangeText: (text: string) => void;
}

export default InputField;
