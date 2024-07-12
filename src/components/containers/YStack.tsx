import { View, ViewProps } from "react-native";

const YStack = ({ style, ...props }: ViewProps) => {
  return (
    <View
      style={[{ display: "flex", flexDirection: "column", rowGap: 12 }, style]}
      {...props}
    />
  );
};

export default YStack;
