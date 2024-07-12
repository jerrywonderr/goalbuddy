import { router } from "expo-router";
import { Image, StyleProp, ViewStyle } from "react-native";
import { TouchableRipple } from "react-native-paper";

const back = require("@/assets/images/back.png");

type THeaderBackButton = {
  canGoBack: boolean;
  style?: StyleProp<ViewStyle>;
};

const HeaderBackButton = ({ canGoBack, style }: THeaderBackButton) => {
  const onPress = () => {
    return canGoBack ? router.back() : undefined;
  };

  return (
    <TouchableRipple onPress={onPress} style={[style]}>
      <Image source={back} height={24} width={24} />
    </TouchableRipple>
  );
};

export default HeaderBackButton;
