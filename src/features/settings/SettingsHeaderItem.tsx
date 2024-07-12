import { useAppTheme } from "@/providers/UIProvider";
import type { ReactNode } from "react";
import type { StyleProp, TextStyle } from "react-native";
import { Text } from "react-native-paper";

type IHeadingTextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

const SettingsHeaderItem = ({ style, ...props }: IHeadingTextProps) => {
  const theme = useAppTheme();
  return (
    <Text
      style={[
        {
          fontSize: 18,
          lineHeight: 28,
          fontFamily: "Inter_500Medium",
          color: theme.colors.text2,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default SettingsHeaderItem;
