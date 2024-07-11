import { Image, ImageProps, StyleSheet } from "react-native";

export const FluidImage = ({ style, ...props }: ImageProps) => {
  return <Image style={[styles.base, style]} resizeMode="contain" {...props} />;
};

const styles = StyleSheet.create({
  base: {
    height: "100%",
  },
});
