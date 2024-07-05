import { config } from "@/config/gluestack-ui.config";
import { Heading } from "@gluestack-ui/themed";
import { PropsWithChildren } from "react";

type IHeadingTextProps = PropsWithChildren<{
  color?: keyof typeof config.tokens.colors;
  fontWeight?: keyof typeof config.tokens.fontWeights;
}>;

export const H2 = () => {
  return <Heading fontSize="$3.5xl" fontWeight="$bold" lineHeight="3xl" />;
};
