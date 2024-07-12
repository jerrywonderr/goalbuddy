import { ViewProps } from "react-native";
import YStack from "../containers/YStack";

const FormGroup = ({ style, ...props }: ViewProps) => {
  return <YStack style={[{ rowGap: 4 }, style]} {...props} />;
};

export default FormGroup;
