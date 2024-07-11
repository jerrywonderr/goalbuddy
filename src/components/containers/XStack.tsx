import { View, ViewProps } from "react-native";

const XStack = ({ style, ...props }: ViewProps) => {
  return (
    <View
      style={[
        { display: "flex", flexDirection: "row", flexWrap: "wrap" },
        style,
      ]}
      {...props}
    />
  );
};

export default XStack;
