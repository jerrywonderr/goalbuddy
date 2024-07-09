import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { Text } from "react-native-paper";

type ITextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

export const P1 = ({ style, ...props }: ITextProps) => {
  return <Text variant="displayLarge" style={[style]} {...props} />;
};

export const P2 = ({ style, ...props }: ITextProps) => {
  return <Text style={[style]} {...props} />;
};
