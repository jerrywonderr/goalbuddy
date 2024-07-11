import { SmallLink, SmallText } from "@/components/BodyText";
import { ExternalLink } from "@/components/ExternalLink";
import { H2 } from "@/components/HeadingText";
import { OutlinedButton, RoundedSecondaryButton } from "@/components/MButton";
import Center from "@/components/containers/Center";
import YStack from "@/components/containers/YStack";
import { FluidImage } from "@/components/image/FluidImage";
import { useAppTheme } from "@/providers/UIProvider";
import { Dimensions, Image, View } from "react-native";

const images = {
  mail: require("@/assets/images/mail.png"),
  google: require("@/assets/images/google.png"),
  target: require("@/assets/images/target.png"),
};

const GettingStarted = () => {
  const theme = useAppTheme();
  const { height } = Dimensions.get("window");
  return (
    <YStack style={{ flex: 1 }}>
      <View style={{ marginTop: 48 }}>
        <H2 style={{ color: theme.colors.onPrimary, textAlign: "center" }}>
          GoalBuddy
        </H2>
      </View>
      <Center style={{ height: "30%", marginTop: 24 }}>
        <FluidImage source={images.target} />
      </Center>
      <YStack
        style={{
          flex: 1,
        }}
      >
        <Center
          style={{
            minHeight: height / 2,
          }}
        >
          <YStack style={{ flex: 1, paddingHorizontal: 36, rowGap: 24 }}>
            <RoundedSecondaryButton
              onPress={() => console.log("Me")}
              icon={() => (
                <Image source={images.google} height={24} width={24} />
              )}
            >
              Continue with Google
            </RoundedSecondaryButton>
            <OutlinedButton
              onPress={() => console.log("Me")}
              icon={() => <Image source={images.mail} height={24} width={24} />}
            >
              Continue with Email
            </OutlinedButton>
          </YStack>
        </Center>
        <Center style={{ marginTop: "auto" }}>
          <SmallText
            style={{
              color: theme.colors.onPrimary,
              textAlign: "center",
              width: 320,
            }}
          >
            By continuing with the services above, you agree to GoalBuddy’s
            <ExternalLink href="https://google.com">
              {" "}
              <SmallLink style={{ color: theme.colors.onPrimary }}>
                Term of Service
              </SmallLink>
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink href="https://google.com">
              <SmallLink style={{ color: theme.colors.onPrimary }}>
                Privacy Policy
              </SmallLink>
            </ExternalLink>
            .
          </SmallText>
        </Center>
      </YStack>
    </YStack>
  );
};

export default GettingStarted;
