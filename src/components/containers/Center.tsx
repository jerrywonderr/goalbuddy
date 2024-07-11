import { View, ViewProps } from "react-native";

const Center = ({ style, ...props }: ViewProps) => {
  return (
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
      {...props}
    />
  );
};

export default Center;
