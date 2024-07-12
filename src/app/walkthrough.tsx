import BaseView from "@/components/containers/BaseView";
import GettingStarted from "@/features/walkthrough/GettingStarted";
import Welcome from "@/features/walkthrough/Welcome";
import useStepper from "@/hooks/useStepper";
import { useAppTheme } from "@/providers/UIProvider";

const WalkthroughScreen = () => {
  const { step, nextStep } = useStepper();
  const theme = useAppTheme();

  const render = () => {
    switch (step) {
      case 2:
        return <GettingStarted />;
      default:
        return <Welcome onPress={nextStep} />;
    }
  };

  return (
    <BaseView style={{ backgroundColor: theme.colors.bg1 }} addSafeArea>
      {render()}
    </BaseView>
  );
};

export default WalkthroughScreen;
