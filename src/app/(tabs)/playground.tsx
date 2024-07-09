import { P1, P2 } from "@/components/BodyText";
import { H2, H3, H4 } from "@/components/HeadingText";
import {
  LinkButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/MButton";
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
          <SecondaryButton title="I look like a link" />
        </HStack>
        <VStack>
          <P1>Heading One</P1>
          <P2>I am a regular body text</P2>
          <H2>I am heading 2</H2>
          <H3>I am heading 3</H3>
          <H4>I am heading 4</H4>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Playground;
