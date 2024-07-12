import { useAppTheme } from "@/providers/UIProvider";
import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { Text } from "react-native-paper";

type ITextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

export const P1 = ({ style, ...props }: ITextProps) => {
  return <Text variant="bodyLarge" style={[style]} {...props} />;
};

export const P2 = ({ style, ...props }: ITextProps) => {
  const theme = useAppTheme();
  return (
    <Text
      variant="bodyMedium"
      style={[
        { fontFamily: "Inter_500Medium", color: theme.colors.text1 },
        style,
      ]}
      {...props}
    />
  );
};

export const P2Bold = ({ style, ...props }: ITextProps) => {
  const theme = useAppTheme();
  return (
    <Text
      variant="bodyMedium"
      style={[
        { fontFamily: "Inter_500Medium", color: theme.colors.text1 },
        style,
      ]}
      {...props}
    />
  );
};

export const LabelSmall = ({ style, ...props }: ITextProps) => {
  const theme = useAppTheme();
  return (
    <Text
      variant="labelSmall"
      style={[{ color: theme.colors.text1 }, style]}
      {...props}
    />
  );
};

export const SmallText = ({ style, ...props }: ITextProps) => {
  return <Text variant="bodySmall" style={[style]} {...props} />;
};

export const SmallLink = ({ style, ...props }: ITextProps) => {
  return (
    <SmallText
      style={[{ textDecorationLine: "underline" }, style]}
      {...props}
    />
  );
};

export const ErrorText = ({ style, ...props }: ITextProps) => {
  const theme = useAppTheme();
  return (
    <Text
      variant="bodySmall"
      style={[{ color: theme.colors.error }, style]}
      {...props}
    />
  );
};
