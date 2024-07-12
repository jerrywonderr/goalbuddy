import { View, ViewProps } from "react-native";

const XStack = ({ style, ...props }: ViewProps) => {
  return (
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          columnGap: 12,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default XStack;
