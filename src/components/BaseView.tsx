import { StyleSheet, View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type TBaseView = { addSafeArea?: boolean };

const BaseView = ({
  children,
  style: containerStyle,
  addSafeArea = false,
}: TBaseView & ViewProps) => {
  return (
    <View style={[styles.base, containerStyle]}>
      {addSafeArea ? <SafeAreaView /> : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flex: 1,
  },
});

export default BaseView;
