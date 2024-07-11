import { useAppTheme } from "@/providers/UIProvider";
import { StyleSheet } from "react-native";
import { Button, ButtonProps } from "react-native-paper";

type IMButton = {} & ButtonProps;

const CustomButton = ({ children, labelStyle, style, ...props }: IMButton) => (
  <Button
    style={[styles.container, style]}
    labelStyle={[
      styles.textBase,
      // { fontWeight: 900 },
      labelStyle,
    ]}
    {...props}
  >
    {children}
  </Button>
);

export const PrimaryButton = ({ children, style, ...props }: IMButton) => {
  const theme = useAppTheme();
  return (
    <CustomButton
      mode="contained"
      style={[style]}
      textColor={theme.colors.gPurple}
      // theme={{ colors: { onPrimary: "" } }}
      {...props}
    >
      {children}
    </CustomButton>
  );
};

export const LinkButton = ({
  children,
  labelStyle,
  style,
  ...props
}: IMButton) => {
  const theme = useAppTheme();
  return (
    <CustomButton
      mode="text"
      textColor={theme.colors.text1}
      style={[style]}
      labelStyle={[styles.linkButtonText, labelStyle]}
      {...props}
    >
      {children}
    </CustomButton>
  );
};

export const SecondaryButton = ({ children, style, ...props }: IMButton) => {
  const theme = useAppTheme();
  return (
    <CustomButton
      mode="contained"
      textColor={theme.colors.onSecondaryContainer}
      style={[
        {
          backgroundColor: theme.colors.secondaryContainer,
          borderRadius: 32,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </CustomButton>
  );
};

export const OutlinedButton = ({ children, style, ...props }: IMButton) => {
  const theme = useAppTheme();
  return (
    <CustomButton
      mode="outlined"
      textColor={theme.colors.gPurple}
      style={[
        {
          borderColor: theme.colors.light1,
        },
        styles.outlinedButton,
        style,
      ]}
      {...props}
    >
      {children}
    </CustomButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  textBase: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    letterSpacing: 0.5,
  },
  linkButtonText: {
    fontFamily: "Inter",
    textDecorationLine: "underline",
    fontSize: 11,
    lineHeight: 16,
  },
  outlinedButton: {
    backgroundColor: "#0000",
    borderRadius: 32,
    borderWidth: 1,
  },
});
