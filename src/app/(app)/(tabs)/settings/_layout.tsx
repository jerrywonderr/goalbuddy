import HeaderBackButton from "@/components/navigation/HeaderBackButton";
import HeaderTitle from "@/components/navigation/HeaderTitle";
import { useAppTheme } from "@/providers/UIProvider";
import { Stack } from "expo-router";
import { Icon } from "react-native-paper";

const SettingsLayout = () => {
  const theme = useAppTheme();

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: theme.colors.background },
        headerLeft: (props) => (
          <HeaderBackButton
            canGoBack={props.canGoBack}
            style={{ marginRight: 12 }}
          />
        ),
        headerBackVisible: false,
        headerTitle: ({ children }) => <HeaderTitle children={children} />,
        headerRight: () => (
          <Icon
            source="face-man-profile"
            size={36}
            color={theme.colors.primary}
          />
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
};

export default SettingsLayout;
