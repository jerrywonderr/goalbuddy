import HeaderBackButton from "@/components/HeaderBackButton";
import { useAppTheme } from "@/providers/UIProvider";
import { Stack } from "expo-router";

export default function AuthLayout() {
  const theme = useAppTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerShadowVisible: false,
        headerLeft: (props) => <HeaderBackButton canGoBack={props.canGoBack} />,
      }}
    >
      <Stack.Screen name="signup" options={{ headerTitle: "" }} />
      <Stack.Screen name="signin" options={{ headerTitle: "" }} />
    </Stack>
  );
}
