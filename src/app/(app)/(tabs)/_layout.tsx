import { Tabs } from "expo-router";

import { TabBarLabel } from "@/components/HeadingText";
import HeaderTitle from "@/components/navigation/HeaderTitle";
import TabBarIcon from "@/components/navigation/TabBarIcon";
import { useAppTheme } from "@/providers/UIProvider";

export default function TabLayout() {
  const theme = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary1,
        // headerShown: false,
        headerTitle: ({ children }) => <HeaderTitle children={children} />,
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({ focused, children }) => (
          <TabBarLabel focused={focused}>{children}</TabBarLabel>
        ),
        tabBarStyle: {
          backgroundColor: theme.colors.bg2,
          height: 68,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          height: 62,
        },
        headerStyle: {
          backgroundColor: theme.colors.bg2,
        },
        headerLeftContainerStyle: {
          paddingLeft: 12,
        },
        headerRightContainerStyle: {
          paddingRight: 12,
        },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="goal" />
          ),
        }}
      />
      <Tabs.Screen
        name="for_you"
        options={{
          title: "For you",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="for_you" />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="settings" />
          ),
        }}
      />
    </Tabs>
  );
}
