import { P2 } from "@/components/BodyText";
import { H6 } from "@/components/HeadingText";
import Center from "@/components/containers/Center";
import YStack from "@/components/containers/YStack";
import { FluidImage } from "@/components/image/FluidImage";
import { View } from "react-native";

const image = require("@/assets/images/regulation.png");

const EmptyState = () => {
  return (
    <View style={{ flex: 1 }}>
      <Center style={{ height: "60%" }}>
        <FluidImage source={image} />
      </Center>
      <YStack>
        <H6 style={{ textAlign: "center" }}>
          What do you need to get done today?
        </H6>
        <Center style={{ flexDirection: "column" }}>
          <P2 style={{ textAlign: "center" }}>
            All your goals will show here.
          </P2>
          <P2 style={{ textAlign: "center", maxWidth: 300 }}>
            Press the ‘+’ to create one or choose one from the ‘For You’
            section.
          </P2>
        </Center>
      </YStack>
    </View>
  );
};

export default EmptyState;
