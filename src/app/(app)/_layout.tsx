import AppLoading from "@/components/AppLoading";
import useAuth from "@/hooks/useAuth";
import { useAppTheme } from "@/providers/UIProvider";
import { Stack } from "expo-router";

export default function AppLayout() {
  const { authenticated, isLoading } = useAuth();
  const theme = useAppTheme();

  if (isLoading || !authenticated) {
    return <AppLoading />;
  }

  return (
    <Stack
      initialRouteName="extra"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen name="extra" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
