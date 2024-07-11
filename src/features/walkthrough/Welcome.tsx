import { P1 } from "@/components/BodyText";
import { H3 } from "@/components/HeadingText";
import { SecondaryButton } from "@/components/MButton";
import Center from "@/components/containers/Center";
import YStack from "@/components/containers/YStack";
import { FluidImage } from "@/components/image/FluidImage";
import { useAppTheme } from "@/providers/UIProvider";

const images = {
  clapping: require("@/assets/images/clapping.png"),
};

type TWelcome = {
  onPress: VoidFunction;
};
const Welcome = ({ onPress }: TWelcome) => {
  const theme = useAppTheme();

  return (
    <YStack style={{ flex: 1 }}>
      <Center style={{ height: "55%" }}>
        <FluidImage source={images.clapping} />
      </Center>
      <YStack style={{ alignItems: "center" }}>
        <H3
          style={{
            textAlign: "center",
            color: theme.colors.onPrimary,
            maxWidth: 300,
          }}
        >
          Welcome to Goal Buddy!
        </H3>
        <P1
          style={{
            color: theme.colors.white,
            textAlign: "center",
            maxWidth: 300,
          }}
        >
          Achieve your goals with the power of determination and support.
        </P1>
        <Center style={{ marginVertical: 16, marginTop: 32 }}>
          <SecondaryButton onPress={onPress}>Get Started</SecondaryButton>
        </Center>
      </YStack>
    </YStack>
  );
};

export default Welcome;
