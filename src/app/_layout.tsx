import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  DefaultTheme,
  DarkTheme as RDarkTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider } from "@/providers/AuthProvider";
import UIProvider from "@/providers/UIProvider";
import { darkTheme, lightTheme } from "@/theme";
import { adaptNavigationTheme } from "react-native-paper";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    Inter: Inter_400Regular,
    InterHeading: Inter_700Bold,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: DefaultTheme,
    reactNavigationDark: RDarkTheme,
    materialDark: darkTheme,
    materialLight: lightTheme,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <UIProvider>
        <ThemeProvider value={LightTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="walkthrough" /> */}
            {/* <Stack.Screen name="(app)" /> */}
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </UIProvider>
    </AuthProvider>
  );
}
