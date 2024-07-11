import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type TBaseView = { children: ReactNode; addSafeArea?: boolean };

const BaseView = ({ children, addSafeArea = false }: TBaseView) => {
  return (
    <View style={[styles.base]}>
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
