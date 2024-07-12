import { SmallText } from "@/components/BodyText";
import XStack from "@/components/containers/XStack";
import YStack from "@/components/containers/YStack";
import Clock from "@/components/svgs/Clock";
import Close from "@/components/svgs/Close";
import SettingsHeaderItem from "@/features/settings/SettingsHeaderItem";
import { useAppTheme } from "@/providers/UIProvider";
import { useLocalStore } from "@/store/useLocalStore";
import { View } from "react-native";
import { Switch } from "react-native-paper";
import SettingsCard from "./SettingsCard";

const Reminder = () => {
  const { sendReminder, toggleSendReminder } = useLocalStore();
  const theme = useAppTheme();

  return (
    <YStack style={{ rowGap: 12 }}>
      <XStack style={{ alignItems: "center", justifyContent: "space-between" }}>
        <View>
          <SettingsHeaderItem>Reminder</SettingsHeaderItem>
          <SmallText>Start your day with a positive quote</SmallText>
        </View>
        <Switch value={sendReminder} onValueChange={toggleSendReminder} />
      </XStack>
      <SettingsCard>
        <XStack
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: 12,
          }}
        >
          <XStack style={{ columnGap: 12, alignItems: "center" }}>
            <Clock color={theme.colors.text1} />
            <SmallText style={{ color: theme.colors.text1 }}>
              08 : 00 AM
            </SmallText>
          </XStack>
          <Close color={theme.colors.text1} />
        </XStack>
      </SettingsCard>
    </YStack>
  );
};

export default Reminder;
