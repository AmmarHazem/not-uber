import { FC } from "react";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";
import PrimaryButton from "../PrimaryButton";

const IntroTemplate: FC<IntroTemplateProps> = ({ onNext, onSkip, imageSource, subtitle, stepNumber, currentStep, title }) => {
  return (
    <View className="flex-1 bg-white justify-between">
      <View className="pt-10 flex-row justify-end px-8 items-center">
        <Pressable hitSlop={16} onPress={onSkip}>
          <Text className="font-semibold">Skip</Text>
        </Pressable>
      </View>
      <View className="flex-1">
        <Image source={imageSource} className="w-full h-[400px]" resizeMode="contain" />
        <Text className="text-4xl px-4 font-bold text-center mb-4">{title}</Text>
        <Text className="text-center px-4 text-gray-500">{subtitle}</Text>
        <View className="flex-row justify-center items-center flex-1 bg-green-600 mt-14">
          <StepIndicator isActive={stepNumber === currentStep} />
          <StepIndicator isActive={stepNumber === currentStep} />
          <StepIndicator isActive={stepNumber === currentStep} />
        </View>
      </View>
      <View className="px-4 mb-10 flex-[2] justify-end">
        <PrimaryButton text="Next" onPress={onNext} />
      </View>
    </View>
  );
};

const StepIndicator: FC<{ isActive: boolean }> = ({ isActive }) => {
  return <View className="w-12 h-2 bg-gray-200 rounded-full mx-1" />;
};

interface IntroTemplateProps {
  onNext: () => void;
  onSkip: () => void;
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  stepNumber: number;
  currentStep: number;
}

export default IntroTemplate;
