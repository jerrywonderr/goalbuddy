import { H2 } from "@/components/HeadingText";
import useAuth from "@/hooks/useAuth";
import { Stack } from "expo-router";

export default function AppLayout() {
  const { authenticated, isLoading } = useAuth();

  if (isLoading || !authenticated) {
    return <H2>Loading...</H2>;
  }

  return (
    <Stack initialRouteName="extra">
      <Stack.Screen name="extra" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
