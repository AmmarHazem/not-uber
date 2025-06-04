import { FC } from "react";
import { Pressable } from "react-native";

const IconButton: FC<IconButtonProps> = ({ children, onPress }) => {
  return (
    <Pressable
      style={{
        backgroundColor: "white",
        borderRadius: "50%",
        paddingLeft: 8,
        paddingRight: 12,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

interface IconButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

export default IconButton;
