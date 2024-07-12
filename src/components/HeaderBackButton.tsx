import { router } from "expo-router";
import { Image } from "react-native";
import { TouchableRipple } from "react-native-paper";

const back = require("@/assets/images/back.png");

type THeaderBackButton = {
  canGoBack: boolean;
};

const HeaderBackButton = ({ canGoBack }: THeaderBackButton) => {
  const onPress = () => {
    return canGoBack ? router.back() : undefined;
  };

  return (
    <TouchableRipple onPress={onPress}>
      <Image source={back} height={24} width={24} />
    </TouchableRipple>
  );
};

export default HeaderBackButton;
