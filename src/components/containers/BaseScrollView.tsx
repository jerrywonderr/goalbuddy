import { ScrollView, ScrollViewProps } from "react-native";

const BaseScrollView = ({ style, ...props }: ScrollViewProps) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={[{ flex: 1 }, style]}
      {...props}
    />
  );
};

export default BaseScrollView;
