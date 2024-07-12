import { useAppTheme } from "@/providers/UIProvider";
import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { Text } from "react-native-paper";

type IHeadingTextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

export const H2 = ({ style, ...props }: IHeadingTextProps) => {
  return <Text variant="headlineMedium" style={[style]} {...props} />;
};

export const H3 = ({ style, ...props }: IHeadingTextProps) => {
  return <Text variant="headlineLarge" style={[style]} {...props} />;
};

export const H4 = ({ style, ...props }: IHeadingTextProps) => {
  return <Text variant="headlineSmall" style={[style]} {...props} />;
};

export const H5 = ({ style, ...props }: IHeadingTextProps) => {
  return <Text variant="titleLarge" style={[style]} {...props} />;
};

export const LabelLarge = ({ style, ...props }: IHeadingTextProps) => {
  return <Text variant="labelLarge" style={[style]} {...props} />;
};

export const TabBarLabel = ({
  style,
  focused,
  ...props
}: IHeadingTextProps & { focused: boolean }) => {
  const theme = useAppTheme();
  return (
    <Text
      variant="labelLarge"
      style={[
        {
          fontFamily: focused ? "Inter_500Medium" : "Inter",
          color: focused ? theme.colors.text2 : theme.colors.text1,
        },
        style,
      ]}
      {...props}
    />
  );
};
