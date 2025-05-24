import { FC } from "react";
import { Image } from "react-native";
import PrimaryButton from "./PrimaryButton";

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ className }) => {
  return (
    <PrimaryButton
      text={"Log In with Google"}
      textClassName="text-black font-normal"
      className={`bg-white border border-1 border-neutral-200 ${className}`}
      leadingIcon={<Image source={require("@/assets/icons/google.png")} resizeMode="contain" className="size-6" />}
    />
  );
};

interface GoogleSignInButtonProps {
  className?: string;
}

export default GoogleSignInButton;
