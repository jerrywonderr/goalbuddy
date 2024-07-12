import AppLoading from "@/components/AppLoading";
import useAuth from "@/hooks/useAuth";
import { Stack } from "expo-router";

export default function AppLayout() {
  const { authenticated, isLoading } = useAuth();

  if (isLoading || !authenticated) {
    return <AppLoading />;
  }

  return (
    <Stack initialRouteName="extra">
      <Stack.Screen name="extra" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
