import { useRouter } from "expo-router";
import { FC, useCallback, useState } from "react";
import { SafeAreaView } from "react-native";
import PagerView, { usePagerView } from "react-native-pager-view";
import IntroTemplate from "../../../src/components/intro/IntroTemplate";

const Welcome: FC = () => {
  const router = useRouter();
  const { setPage, ref } = usePagerView();
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = useCallback(() => {
    if (currentPage === 2) {
      return router.replace("/(auth)/sign-up");
    }
    setPage(currentPage + 1);
  }, [currentPage, router, setPage]);

  const handleSkip = useCallback(() => {
    router.replace("/(auth)/sign-up");
  }, [router]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <PagerView ref={ref} style={{ flex: 1 }} onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
        <IntroTemplate
          onNext={handleNext}
          onSkip={handleSkip}
          title={"The best car in your hand with Ryde"}
          subtitle={"Discover the convenience of finding your perfect ride with our Ryde App"}
          stepNumber={0}
          currentStep={currentPage}
          imageSource={require("@/assets/images/onboarding1.png")}
        />
        <IntroTemplate
          onNext={handleNext}
          onSkip={handleSkip}
          title={"The best car in your hand with Ryde"}
          subtitle={"Discover the convenience of finding your perfect ride with our Ryde App"}
          stepNumber={1}
          currentStep={currentPage}
          imageSource={require("@/assets/images/onboarding2.png")}
        />
        <IntroTemplate
          onNext={handleNext}
          onSkip={handleSkip}
          title={"The best car in your hand with Ryde"}
          subtitle={"Discover the convenience of finding your perfect ride with our Ryde App"}
          stepNumber={2}
          currentStep={currentPage}
          nextButtonText="Get Started"
          imageSource={require("@/assets/images/onboarding3.png")}
        />
      </PagerView>
    </SafeAreaView>
  );
};

export default Welcome;
