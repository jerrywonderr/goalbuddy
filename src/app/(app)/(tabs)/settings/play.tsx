import { P1, P2, P2Bold } from "@/components/BodyText";
import { H2, H3, H4 } from "@/components/HeadingText";
import {
  LinkButton,
  OutlinedButton,
  PrimaryButton,
  SecondaryButton,
} from "@/components/MButton";
import { useAppTheme } from "@/providers/UIProvider";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = {
  google: require("@/assets/images/google.png"),
  mail: require("@/assets/images/mail.png"),
};

const Playground = () => {
  const theme = useAppTheme();
  return (
    <View style={{ padding: 12 }}>
      <SafeAreaView />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <PrimaryButton onPress={() => console.log("Me")} icon={images.google}>
            Press me too
          </PrimaryButton>
          <LinkButton onPress={() => console.log("Me")}>
            I look like a link
          </LinkButton>
          <SecondaryButton
            onPress={() => console.log("Me")}
            icon={() => <Image source={images.google} height={24} width={24} />}
          >
            I look like a link
          </SecondaryButton>
          <View
            style={{
              height: 300,
              paddingVertical: 12,
              backgroundColor: theme.colors.primary,
            }}
          >
            <OutlinedButton
              onPress={() => console.log("Me")}
              icon={() => <Image source={images.mail} height={24} width={24} />}
            >
              Continue with email
            </OutlinedButton>
          </View>
        </View>
        <View>
          <P1>Heading One</P1>
          <P2>I am a regular body text</P2>
          <P2Bold>I am a regular body text</P2Bold>
          <H2>Welcome to Goal Buddy!</H2>
          <H3>Create and Customize Goals</H3>
          <H4>I am heading 4</H4>
        </View>
      </ScrollView>
    </View>
  );
};

export default Playground;
