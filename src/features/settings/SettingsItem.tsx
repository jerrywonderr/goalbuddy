import { LabelSmall } from "@/components/BodyText";
import XStack from "@/components/containers/XStack";
import YStack from "@/components/containers/YStack";
import CaretRight from "@/components/svgs/CaretRight";
import { useAppTheme } from "@/providers/UIProvider";
import { Divider, TouchableRipple } from "react-native-paper";

type TSettingsType = {
  label: string;
  onPress?: VoidFunction;
  showDivider?: boolean;
};

const SettingsItem = ({
  label,
  onPress,
  showDivider = true,
}: TSettingsType) => {
  const theme = useAppTheme();
  return (
    <TouchableRipple onPress={onPress}>
      <YStack style={{ rowGap: 1 }}>
        <XStack
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: 12,
          }}
        >
          <LabelSmall> {label}</LabelSmall>
          <CaretRight color={theme.colors.text1} />
        </XStack>
        {showDivider ? (
          <Divider style={{ backgroundColor: theme.colors.grey1 }} />
        ) : null}
      </YStack>
    </TouchableRipple>
  );
};

export default SettingsItem;
