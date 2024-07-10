import { useColorScheme } from "@/hooks/useColorScheme";
import { darkTheme, lightTheme } from "@/theme";
import { ReactNode } from "react";
import { PaperProvider, useTheme } from "react-native-paper";

interface IUIProviderProps {
  children: ReactNode;
}

export type AppTheme = typeof lightTheme;

export const useAppTheme = () => useTheme<AppTheme>();

const UIProvider = ({ children }: IUIProviderProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default UIProvider;
