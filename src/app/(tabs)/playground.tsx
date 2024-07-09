import { P1, P2 } from "@/components/BodyText";
import { H2, H3, H4 } from "@/components/HeadingText";
import {
  LinkButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/MButton";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Playground = () => {
  return (
    <View>
      <SafeAreaView />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <PrimaryButton>Press me too</PrimaryButton>
          <LinkButton>I look like a link</LinkButton>
          <SecondaryButton>I look like a link</SecondaryButton>
        </View>
        <View>
          <P1>Heading One</P1>
          <P2>I am a regular body text</P2>
          <H2>I am heading 2</H2>
          <H3>I am heading 3</H3>
          <H4>I am heading 4</H4>
        </View>
      </ScrollView>
    </View>
  );
};

export default Playground;
