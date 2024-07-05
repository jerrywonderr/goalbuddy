import { P1, P2 } from "@/components/BodyText";
import { LinkButton, PrimaryButton } from "@/components/MButton";
import { HStack, ScrollView, VStack } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Playground = () => {
  return (
    <VStack>
      <SafeAreaView />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack space="sm">
          <PrimaryButton title="Press me too" />
          <LinkButton title="I look like a link" />
        </HStack>
        <VStack>
          <P1>Heading One</P1>
          <P2>I am a regular body text</P2>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Playground;
