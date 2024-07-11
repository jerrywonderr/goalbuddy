import BaseView from "@/components/BaseView";
import { H2 } from "@/components/HeadingText";
import Center from "@/components/containers/Center";
import YStack from "@/components/containers/YStack";
import { useAppTheme } from "@/providers/UIProvider";
import { useLocalStore } from "@/store/useLocalStore";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { Image } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const images = {
  clapping: require("@/assets/images/clapping.png"),
};

const EntryScreen = () => {
  const { firstOpen, onFirstOpen } = useLocalStore();
  const theme = useAppTheme();

  useEffect(() => {
    return onFirstOpen;
  }, []);

  if (!firstOpen) {
    return Redirect({ href: "/walkthrough" });
  }

  return (
    <BaseView style={{ backgroundColor: theme.colors.bg1 }} addSafeArea>
      <Center style={{ height: "70%" }}>
        <Image
          source={images.clapping}
          resizeMode="contain"
          style={{ height: "100%" }}
        />
      </Center>
      <YStack style={{ alignItems: "center" }}>
        <H2
          style={{
            textAlign: "center",
            color: theme.colors.onPrimary,
            maxWidth: 300,
          }}
        >
          Welcome to Goal Buddy!
        </H2>

        <ActivityIndicator
          size="large"
          animating={true}
          color={theme.colors.onPrimary}
          style={{ marginTop: 24 }}
        />
      </YStack>
    </BaseView>
  );
};

export default EntryScreen;
