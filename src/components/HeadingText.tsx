import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { Text } from "react-native-paper";

type IHeadingTextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

export const H2 = ({ style, ...props }: IHeadingTextProps) => {
  return (
    <Text
      variant="displayLarge"
      style={[{ fontFamily: "Inter" }, style]}
      {...props}
    />
  );
};

export const H3 = ({ style, ...props }: IHeadingTextProps) => {
  return (
    <Text
      variant="displayLarge"
      style={[{ fontFamily: "Inter" }, style]}
      {...props}
    />
  );
};

export const H4 = ({ style, ...props }: IHeadingTextProps) => {
  return (
    <Text
      variant="displayLarge"
      style={[{ fontFamily: "Inter" }, style]}
      {...props}
    />
  );
};
