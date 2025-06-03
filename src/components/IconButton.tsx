import { FC } from "react";
import { Pressable } from "react-native";

const IconButton: FC<IconButtonProps> = ({ children, onPress }) => {
  return <Pressable onPress={onPress}>{children}</Pressable>;
};

interface IconButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

export default IconButton;
