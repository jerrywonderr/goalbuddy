import { config } from "@/config/gluestack-ui.config";
import { Text } from "@gluestack-ui/themed";
import { PropsWithChildren } from "react";

type ITextProps = PropsWithChildren<{
  color?: keyof typeof config.tokens.colors;
  fontWeight?: keyof typeof config.tokens.fontWeights;
}>;

export const P1 = ({
  color = "bodyTextLight",
  fontWeight = "normal",
  ...props
}: ITextProps) => {
  return (
    <Text size="md" color={`$${color}`} fontWeight={fontWeight} {...props} />
  );
};

export const P2 = ({ color = "bodyTextLight", ...props }: ITextProps) => {
  return <Text color={`$${color}`} size="sm" fontWeight="$medium" {...props} />;
};
