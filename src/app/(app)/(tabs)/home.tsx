import { StyleSheet, View } from "react-native";

import BaseView from "@/components/containers/BaseView";
import XStack from "@/components/containers/XStack";
import HeaderTitle from "@/components/navigation/HeaderTitle";
import Analytics from "@/components/svgs/Analytics";
import Buddies from "@/components/svgs/Buddies";
import EmptyState from "@/features/home/EmptyState";
import { useAppTheme } from "@/providers/UIProvider";
import { Tabs } from "expo-router";
import { Icon, IconButton } from "react-native-paper";
import { Shadow } from "react-native-shadow-2";

const HeaderRight = () => {
  return (
    <XStack style={{ alignItems: "center", columnGap: 0 }}>
      <IconButton onPress={() => console.log("ME")} icon={() => <Buddies />} />
      <IconButton
        onPress={() => console.log("ME")}
        icon={() => <Analytics />}
      />
    </XStack>
  );
};

export default function HomeScreen() {
  const theme = useAppTheme();

  return (
    <BaseView addSafeArea>
      <Tabs.Screen
        options={{
          headerTitle: () => <HeaderTitle>Hi, DivineFortune</HeaderTitle>,
          headerLeft: () => (
            <Icon
              source="face-man-profile"
              size={36}
              color={theme.colors.primary}
            />
          ),

          headerRight: () => <HeaderRight />,
        }}
      />
      <EmptyState />
      <View
        style={{ position: "absolute", bottom: "6%", right: 0, padding: 12 }}
      >
        <Shadow style={{ borderRadius: 100 }}>
          <IconButton
            iconColor={theme.colors.onPrimary}
            style={{ backgroundColor: theme.colors.primary, margin: 0 }}
            icon="plus"
            onPress={() => console.log("ME")}
            size={36}
          />
        </Shadow>
      </View>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
