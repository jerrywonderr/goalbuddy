import { config } from "@/config/gluestack-ui.config";
import { Heading } from "@gluestack-ui/themed";
import { PropsWithChildren } from "react";

type IHeadingTextProps = PropsWithChildren<{
  color?: keyof typeof config.tokens.colors;
  fontWeight?: keyof typeof config.tokens.fontWeights;
}>;

export const H2 = ({ ...props }: IHeadingTextProps) => {
  return <Heading size="3.5xl" {...props} />;
};

export const H3 = ({ ...props }: IHeadingTextProps) => {
  return <Heading size="1.5lg" fontFamily="Inter" {...props} />;
};

export const H4 = ({ ...props }: IHeadingTextProps) => {
  return <Heading size="lg" fontFamily="Inter" {...props} />;
};
