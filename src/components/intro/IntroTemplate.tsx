import { FC } from "react";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";
import PrimaryButton from "../PrimaryButton";

const IntroTemplate: FC<IntroTemplateProps> = ({
  onNext,
  onSkip,
  nextButtonText,
  imageSource,
  subtitle,
  stepNumber,
  currentStep,
  title,
}) => {
  return (
    <View className="flex-1 bg-white justify-between">
      <View className="pt-10 flex-row justify-end px-8 items-center">
        <Pressable hitSlop={16} onPress={onSkip}>
          <Text className="font-semibold font-JakartaBold text-base">Skip</Text>
        </Pressable>
      </View>
      <View className="flex-1">
        <Image source={imageSource} className="w-full h-[400px]" resizeMode="contain" />
        <Text className="text-4xl px-4 font-bold text-center mb-4">{title}</Text>
        <Text className="text-center px-4 text-gray-500">{subtitle}</Text>
        <View className="flex-row mb-20 justify-center items-center flex-1 mt-14">
          <StepIndicator isActive={0 === currentStep} />
          <StepIndicator isActive={1 === currentStep} />
          <StepIndicator isActive={2 === currentStep} />
        </View>
      </View>
      <View className="px-4 mb-10 justify-end">
        <PrimaryButton text={nextButtonText ?? "Next"} onPress={onNext} />
      </View>
    </View>
  );
};

const StepIndicator: FC<{ isActive: boolean }> = ({ isActive }) => {
  return <View className={`w-12 h-2 ${isActive ? "bg-blue-500" : "bg-gray-200"} rounded-full mx-1`} />;
};

interface IntroTemplateProps {
  onNext: () => void;
  onSkip: () => void;
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  stepNumber: number;
  currentStep: number;
  nextButtonText?: string;
}

export default IntroTemplate;
