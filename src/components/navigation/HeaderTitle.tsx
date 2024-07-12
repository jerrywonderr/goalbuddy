import { useAppTheme } from "@/providers/UIProvider";
import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { Text } from "react-native-paper";

type IHeadingTextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

const HeaderTitle = ({ style, ...props }: IHeadingTextProps) => {
  const theme = useAppTheme();

  return (
    <Text
      style={[
        {
          fontFamily: "Inter_600SemiBold",
          fontSize: 20,
          color: theme.colors.text2,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default HeaderTitle;
