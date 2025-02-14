import { MD3Type } from "react-native-paper/lib/typescript/types";

const fonts: { [x: string]: Partial<MD3Type> } = {
  default: {
    fontFamily: "Inter",
    // fontWeight: "400",
    letterSpacing: 0,
  },
  displaySmall: {
    fontFamily: "Inter",
    fontSize: 36,
    // fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 44,
  },
  displayMedium: {
    fontFamily: "Inter",
    fontSize: 45,
    // fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 52,
  },
  displayLarge: {
    fontFamily: "Inter",
    fontSize: 57,
    // fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 64,
  },
  headlineSmall: {
    fontFamily: "Inter_700Bold",
    fontSize: 24,
    // fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 32,
  },
  headlineMedium: {
    fontFamily: "Inter_700Bold",
    fontSize: 28,
    // fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineLarge: {
    fontFamily: "Inter_700Bold",
    fontSize: 32,
    // fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 40,
  },
  titleSmall: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    // fontWeight: "500",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  titleMedium: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    // fontWeight: "500",
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleLarge: {
    fontFamily: "Inter_700Bold",
    fontSize: 22,
    // fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 28,
  },
  labelSmall: {
    fontFamily: "Inter_500Medium",
    fontSize: 11,
    // fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelMedium: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    // fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelLarge: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    // fontWeight: "500",
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  bodySmall: {
    fontFamily: "Inter",
    fontSize: 12,
    // fontWeight: "400",
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  bodyMedium: {
    fontFamily: "Inter",
    fontSize: 14,
    // fontWeight: "400",
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodyLarge: {
    fontFamily: "Inter",
    fontSize: 16,
    // fontWeight: "400",
    letterSpacing: 0.15,
    lineHeight: 24,
  },
};

export default fonts;
