import IntroTemplate from "@/src/components/intro/IntroTemplate";
import { FC, useCallback, useState } from "react";
import { SafeAreaView } from "react-native";
import PagerView, { usePagerView } from "react-native-pager-view";

const Welcome: FC = () => {
  const { setPage, ref } = usePagerView();
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = useCallback(() => {
    if (currentPage === 2) return;
    setPage(currentPage + 1);
  }, [currentPage, setPage]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <PagerView ref={ref} style={{ flex: 1 }} onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
        <IntroTemplate
          onNext={handleNext}
          onSkip={function (): void {
            throw new Error("Function not implemented.");
          }}
          title={"The best car in your hand with Ryde"}
          subtitle={"Discover the convenience of finding your perfect ride with our Ryde App"}
          stepNumber={1}
          currentStep={1}
          imageSource={require("@/assets/images/onboarding1.png")}
        />
        <IntroTemplate
          onNext={handleNext}
          onSkip={function (): void {
            throw new Error("Function not implemented.");
          }}
          stepNumber={2}
          title={"The best car in your hand with Ryde"}
          subtitle={"Discover the convenience of finding your perfect ride with our Ryde App"}
          currentStep={1}
          imageSource={require("@/assets/images/onboarding2.png")}
        />
        <IntroTemplate
          onNext={handleNext}
          onSkip={function (): void {
            throw new Error("Function not implemented.");
          }}
          stepNumber={3}
          title={"The best car in your hand with Ryde"}
          subtitle={"Discover the convenience of finding your perfect ride with our Ryde App"}
          currentStep={1}
          imageSource={require("@/assets/images/onboarding3.png")}
        />
      </PagerView>
    </SafeAreaView>
  );
};

export default Welcome;
